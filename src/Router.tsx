import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Login from "./features/authentication/components/Login/Login";
import Register from "./features/authentication/components/Register/Register";

export default function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <App /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
