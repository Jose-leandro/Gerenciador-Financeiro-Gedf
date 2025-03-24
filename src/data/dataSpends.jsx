import { format } from "date-fns";

const today = new Date();
const formatted = format(today, "dd/MM/yyyy"); // "2025-02-10"

export const dataSpends = {
    titleSpend: "Grocery shopping",
    dataSpend: formatted,
    amountSpent: "R$ 40"
} 