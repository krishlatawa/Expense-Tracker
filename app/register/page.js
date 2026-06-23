import React from 'react'
import { registerUser } from '@/actions/user-actions'
const page = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12 flex items-center justify-center">
            <div className="w-full max-w-md rounded-[28px] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold">Create Account</h1>
                    <p className="mt-2 text-sm text-slate-400">Sign up quickly and start tracking your expenses today.</p>
                </div>

                <form className="space-y-5" action={registerUser}>
                    <input
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />

                    <input
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />

                    <input
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    <button
                        className="w-full rounded-3xl bg-slate-100 px-4 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page