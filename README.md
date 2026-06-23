# Expense Tracker

A full-stack expense tracking application built with Next.js, Auth.js, Prisma, PostgreSQL (Neon), Tailwind CSS, and Recharts.

## Live Demo

https://expense-tracker-six-zeta-55.vercel.app

## Features

* User Registration & Login
* Secure Authentication with Auth.js
* Add Expenses
* Edit Expenses
* Delete Expenses
* Search Expenses
* Filter Expenses by Category
* Dashboard Analytics
* Category-wise Expense Breakdown
* Responsive UI

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Next.js Server Actions
* Auth.js

### Database

* PostgreSQL (Neon)
* Prisma ORM

### Charts

* Recharts

## Installation

Clone the repository:

```bash
git clone https://github.com/krishlatawa/Expense-Tracker.git
```

Move into the project:

```bash
cd Expense-Tracker
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
AUTH_SECRET=your_auth_secret
```

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Visit:

```txt
http://localhost:3000
```

## Future Improvements

* Expense Budgets
* Monthly Reports
* CSV Export
* Dark Mode
* Recurring Expenses
* AI-powered Expense Insights

## Author

Krish Latawa

GitHub: https://github.com/krishlatawa
