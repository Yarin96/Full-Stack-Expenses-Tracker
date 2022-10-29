import React from "react";
import { Outlet } from "react-router-dom";

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ExpensesLayout;
