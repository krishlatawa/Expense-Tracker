"use client";

import { createExpense } from "../actions/expenseActions";

import React, { useState } from 'react'

export default function ExpenseForm() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const categories = [
        "Food",
        "Travel",
        "Shopping",
        "Entertainment",
        "Bills",
        "Other",
    ]

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const formData = new FormData(e.target);
        const result = await createExpense(formData);

        if (result.error) {
            setError(result.error);
        } else if (result.success) {
            setSuccess(true);
            e.target.reset();
            setTimeout(() => setSuccess(false), 3000);
        }
    }

    return (
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label htmlFor="title" className="sr-only">Title</label>
                    <input
                        id="title"
                        name="title"    
                        type="text"
                        placeholder="Title"
                        className="w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 ease-in-out focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                    />

                    <label htmlFor="amount" className="sr-only">Amount</label>
                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        placeholder="Amount"
                        className="w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 ease-in-out focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                    />
                </div>

                <label htmlFor="category" className="sr-only">Category</label>
                <select
                    id="category"
                    name="category"
                    className="w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 ease-in-out focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                >
                    {categories.map((category) => (
                        <option value={category} key={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <label htmlFor="date" className="sr-only">Date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 ease-in-out focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/80"
                />

                {error && (
                    <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="rounded-2xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                        Expense added successfully!
                    </div>
                )}

                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
                >
                    Add Expense
                </button>
            </form>
        </div>
    )
}
