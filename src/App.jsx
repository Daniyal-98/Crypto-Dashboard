import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/support/Support";
import TransactionPage from "./pages/transaction/TransactionPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: < Dashboard />,
  },
  {
    path: "/transaction",
    element: < TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
