import { create } from "zustand";

export type Category = "necesidades" | "deseos" | "ahorro";

export interface Expense {
    id: string;
    name: string;
    amount: number;
    category: Category;
    date: string;
}

interface BudgetState {
    income: number;
    expenses: Expense[];
    setIncome: (income: number) => void;
    addExpense: (expense: Expense) => void;
    removeExpense: (id: string) => void;
}

export const useBudgetStore = create<BudgetState>((set) => ({
    income: 0,
    expenses: [],
    setIncome: (income) => set(() => ({ income })),
    addExpense: (expense) =>
      set((state) => ({ expenses: [...state.expenses, expense] })),
    removeExpense: (id) =>
      set((state) => ({
        expenses: state.expenses.filter((e) => e.id !== id),
      })),
  }));