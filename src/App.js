import React, { useState, useCallback } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Introduction from "./shared/components/Introduction/Introduction";
import RootLayout from "./shared/components/RootLayout/RootLayout";
import ExpensesLayout from "./expenses/components/ExpensesLayout/ExpensesLayout";
import ViewExpenses from "./expenses/components/ViewExpenses/ViewExpenses";
import NewExpense from "./expenses/components/NewExpense/NewExpense";
import UserExpenses from "./expenses/pages/UserExpenses";
import { loader as ExpensesLoader } from "./expenses/components/ViewExpenses/ViewExpenses";
import { loader as UpdateExpenseLoader } from "./expenses/components/UpdateExpense/UpdateExpense";
import UpdateExpense from "./expenses/components/UpdateExpense/UpdateExpense";
import Auth from "./user/Auth/Auth";
import { AuthContext } from "./shared/context/auth-context";

const router = createBrowserRouter(
  createRoutesFromElements(
    /// Add: errorElement={} as props to Route
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Introduction />} />
      <Route path="/expenses" element={<ExpensesLayout />}>
        <Route index element={<UserExpenses />} />
        <Route
          path=":userId"
          element={<ViewExpenses />}
          loader={ExpensesLoader}
        />
        <Route
          path=":userId/:expenseId"
          element={<UpdateExpense />}
          loader={UpdateExpenseLoader}
        />
      </Route>
      <Route path="/expenses/add" element={<NewExpense />} />
      <Route path="/auth" element={<Auth />} />
    </Route>
  )
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default App;
