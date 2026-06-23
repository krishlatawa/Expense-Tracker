"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        console.log(res);

        if (res?.ok) {
            router.push("/dashboard");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="min-h-[95vh] bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50">
                <div className="mb-8">
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-100">Login</h1>
                    <p className="mt-3 text-sm text-slate-400">Enter your credentials to access your expense dashboard.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-5 py-4 text-base text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-5 py-4 text-base text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-3xl bg-slate-100 px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}