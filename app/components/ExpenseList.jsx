"use client"
import React from 'react'
import { deleteExpense, updateExpense } from '../actions/expenseActions'
import { useState } from 'react'

export default function ExpenseList({ expenses }) {

    const [editingId, seteditingId] = useState(null)
    const [selectedcategory, setSelectedcategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const categories = [
        "All",
        "Food",
        "Travel",
        "Shopping",
        "Entertainment",
        "Bills",
        "Other",
    ]

    const filteredExpenses =
        (selectedcategory === "All") ? expenses : expenses.filter((expense) => {
            return expense.category === selectedcategory
        })

    const finalExpenses =
        filteredExpenses.filter((expense) =>
            expense.title.toLowerCase().includes(searchTerm.toLowerCase())
        )


    if (expenses.length === 0) {
        return (
            <div className="rounded-3xl border border-dashed border-slate-300/90 bg-slate-50 p-8 text-center text-slate-600 shadow-sm shadow-slate-200/40">
                No expenses yet. Add your first one to see it here.
            </div>
        )
    }




    return (
        <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50 p-4 shadow-sm shadow-slate-200/30">
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((category) => {
                        const isActive = selectedcategory === category
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedcategory(category)}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out ${isActive ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/10' : 'bg-white text-slate-700 hover:bg-slate-100'}`}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>
            </div>

            <input type="text" placeholder='Search Expenses' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-2 mb-4" />

            {finalExpenses.map((expense) => (
                <div key={expense.id}>
                    {editingId !== expense.id && (
                        <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                                <div className="space-y-3">
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{expense.category}</div>
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                                        <span className="text-lg font-semibold text-slate-900">{expense.title}</span>
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{new Date(expense.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-3 sm:items-end">
                                    <p className="text-2xl font-semibold text-slate-900">${expense.amount}</p>
                                    <form action={deleteExpense} className="mt-2 sm:mt-0">
                                        <input type="hidden" name="expenseId" value={expense.id} />
                                        <button className="inline-flex rounded-2xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300/70" type="submit">
                                            Delete
                                        </button>
                                    </form>
                                    <button type="button" onClick={() => { seteditingId(expense.id) }} className='inline-flex rounded-2xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300/70'>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </article>
                    )}


                    {editingId === expense.id && (
                        <form action={updateExpense} className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/50">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={expense.title}
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        defaultValue={expense.amount}
                                        step="0.01"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                                    />
                                </div>

                                <input type="hidden" name="expenseId" value={expense.id} />

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="submit"
                                        className="flex-1 rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300/70"
                                    >
                                        Save
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => seteditingId(null)}
                                        className="flex-1 rounded-2xl bg-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-200 ease-in-out hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/70"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            ))}
        </div>
    )
}
