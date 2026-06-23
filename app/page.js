import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-[32px] border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Welcome
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Happy to see you here.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Expense Tracker helps you stay on top of your budget with a clean dashboard and simple expense tools.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total users</p>
            <p className="mt-4 text-3xl font-semibold text-slate-100">{users.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-amber-500/10 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Ready to manage</p>
            <p className="mt-4 text-3xl font-semibold text-amber-100">Your expenses</p>
          </div>
        </div>
      </div>
    </main>
  );
}
