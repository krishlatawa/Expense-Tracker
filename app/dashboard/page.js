import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseCards from "../components/ExpenseCards";
import CategoryBreakdown from "../components/CategoryBreakdown";
import { logout } from "../actions/authActions";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const expenses = await prisma.expense.findMany({
    where: {
      userId: session.user.id
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const totalEnteries = expenses.length

  // Total expenses :-

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount, 0
  )

  const now = new Date()
  const Month = expenses.filter((expense) => {
    const expensedate = new Date(expense.date)

    return (
      now.getMonth() === expensedate.getMonth()
      &&
      now.getFullYear() === expensedate.getFullYear()
    )
  })

  const totalThisMonth = Month.reduce(
    (sum, expense) => sum + expense.amount, 0
  )

  const categoryTotals = expenses.reduce((acc, expense) => {

    if (!acc[expense.category]) {
      acc[expense.category] = 0
    }

    acc[expense.category] += expense.amount

    return acc

  }, {})

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Welcome back, {session.user.name}
              </h1>
            </div>

            <form action={logout}>
              <button
                type="submit"
                className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Logout
              </button>
            </form>
          </div>
        </section>

        <div className="space-y-10">
          <ExpenseCards totalEnteries={totalEnteries} totalExpenses={totalExpenses} totalThisMonth={totalThisMonth} />

          <CategoryBreakdown categoryTotals={categoryTotals} />

          <section className="grid gap-10 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-8">
              <ExpenseForm />
            </div>
            <div className="space-y-8">
              <ExpenseList expenses={expenses} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}