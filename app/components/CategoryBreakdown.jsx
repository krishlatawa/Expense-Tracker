"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function CategoryBreakdown({ categoryTotals }) {

    const chartData = (
        Object.entries(categoryTotals).map(([category, amount]) => ({
            category, amount
        })))

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Category Breakdown
            </h2>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                            dataKey="amount"
                            fill="#3b82f6"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}