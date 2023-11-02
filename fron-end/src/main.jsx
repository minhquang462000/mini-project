import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/Admin.jsx";
import store from "./store";
import { Provider } from "react-redux";
import LoginPage from "./pages/Login.jsx";
import AuthPage from "./component/Auth.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
