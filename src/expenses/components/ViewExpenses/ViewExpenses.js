import React from "react";
import { useLoaderData } from "react-router-dom";
import UserExpenseList from "../UserExpenseList/UserExpenseList";

const ViewExpenses = () => {
  const DUMMY_USER_EXPENSES = [
    {
      id: "e1",
      image: "",
      name: "Book",
      description: "a book from Stimatzki",
      price: "80",
      category: "other",
      creatorId: "u1",
    },
    {
      id: "e2",
      image: "",
      name: "Pizza",
      description: "a pizza from pizzaHut",
      price: "50",
      category: "food",
      creatorId: "u1",
    },
  ];

  const expenseData = useLoaderData();

  const loadedExpenses = DUMMY_USER_EXPENSES.filter(
    (expense) => expense.creatorId === expenseData
  );

  return (
    <>
      <UserExpenseList items={loadedExpenses} />
    </>
  );
};

export default ViewExpenses;

export function loader({ params }) {
  return params.userId;
}
