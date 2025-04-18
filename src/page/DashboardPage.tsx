"use client";

import IncomeForm from "@/components/budget/IncomeForm";
import { useBudgetStore } from "@/store/budgetStore";

export default function DashboardPage() {
  // Para ver el ingreso actual:
  const income = useBudgetStore((state) => state.income);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <IncomeForm />
      <p className="text-lg font-bold">Ingreso actual: ${income}</p>
    </main>
  );
}
