import { useState } from "react";
import { useBudgetStore } from "@/store/budgetStore";

const IncomeForm = () => {
  const [incomeInput, setIncomeInput] = useState<number>(0);
  const setIncome = useBudgetStore((state) => state.setIncome);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (incomeInput <= 0) return;

    setIncome(incomeInput);
    alert("Ingreso actualizado ✅");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-4 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Ingresos Mensuales
      </h2>

      <div className="flex flex-col">
        <label htmlFor="income" className="text-sm font-medium text-gray-600">
          Monto en $
        </label>
        <input
          type="number"
          id="income"
          value={incomeInput}
          onChange={(e) => setIncomeInput(Number(e.target.value))}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          min={0}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Guardar ingreso
      </button>
    </form>
  );
};

export default IncomeForm;
