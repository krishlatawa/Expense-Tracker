import React from 'react'

export default function ExpenseCards({ totalEnteries, totalExpenses, totalThisMonth }) {
    return (
        <section className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-200/50 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.18em]">Total Entries</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">{totalEnteries}</p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-200/50 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.18em]">Total Expenses</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">${totalExpenses}</p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-200/50 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.18em]">This Month</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">${totalThisMonth}</p>
            </div>
        </section>
    )
}
