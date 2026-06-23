"use server"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function registerUser(formData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    const exsistingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (exsistingUser) {
        throw new Error("Email already exsists!")
    }

    const hashedpassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedpassword
        }
    });

    return { success: true };

}