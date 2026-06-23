"use server"

import { auth } from "@/auth"
import { prisma, Prisma } from "@/lib/prisma"
import { empty } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

export async function createExpense(formData) {

    const session = await auth();

    if (!session) {
        return { error: "Please login first!" }
    }

    const title = formData.get("title")
    const amount = parseFloat(formData.get("amount"))
    const category = formData.get("category")
    const date = new Date(formData.get("date"))

    if (!title || title.trim().length == 0) {
        return { error: "Please fill req title!" }
    }

    if (isNaN(amount) || amount <= 0) {
        return { error: "Enter valid amount!" }
    }

    if (category.trim().length === 0) {
        return { error: "Enter category" }
    }

    if (!date) {
        return { error: "Enter date" }
    }

    const res = await prisma.expense.create({
        data: {
            title,
            amount,
            category,
            date,
            userId: session.user.id
        }
    });

    revalidatePath("/dashboard")

    return { success: true }

}

export async function deleteExpense(formData) {

    const session = await auth()

    if (!session) {
        return { error: "Please login first" }
    }

    const expenseId = formData.get("expenseId")

    const res = await prisma.expense.findUnique({
        where: {
            id: expenseId
        }
    })

    if (!res) {
        return { error: "Expense not found!" }
    }

    if (session.user.id != res.userId) {
        return { error: "Unauthorized" }
    }

    await prisma.expense.delete({
        where: { id: expenseId }
    })

    revalidatePath("/dashboard")
    return { success: true }
}

export async function updateExpense(formData) {

    const session = await auth();

    if (!session) {
        return { error: "Please login first!" }
    }

    const expenseId = formData.get("expenseId")
    const title = formData.get("title")
    const amount = parseFloat(formData.get("amount")
    )
    if (!title || title.trim().length == 0) {
        return { error: "Title is empty!" }
    }

    if (isNaN(amount) || amount <= 0) {
        return { error: "Amount isn't right!" }
    }

    if (!expenseId) {
        return { error: "Expense Id missing!" }
    }

    const res = await prisma.expense.findUnique({
        where: { id: expenseId }
    })

    if (!res) {
        return { error: "Expense doesn't exsists" }
    }

    if (session.user.id != res.userId) {
        return { error: "Unauthorized!" }
    }

    await prisma.expense.update({
        where: { id: expenseId },
        data: {
            title: title,
            amount: amount
        }
    })

    revalidatePath("/dashboard");

    return { success: true }
}