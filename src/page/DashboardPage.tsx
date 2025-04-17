import IncomeForm from "@/components/budget/IncomeForm";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <IncomeForm />
    </main>
  );
}

// Para ver el ingreso actual:
// const income = useBudgetStore((state) => state.income);
// <p className="text-lg font-bold">Ingreso actual: ${income}</p>
