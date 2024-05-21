import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AuthProvider from "./providers/auth-provider/provider";
import { AuthGuardRoute } from "@/components";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import SignInPage from "@/pages/SignInPage/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuardRoute>
        <HomePage />
      </AuthGuardRoute>
    ),
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },

  {
    path: "/signin",
    element: <SignInPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
