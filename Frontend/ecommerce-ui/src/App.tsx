import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Product from "./pages/Products/Products";
import Order from "./pages/Orders/Orders";
import Inventory from "./pages/Inventory/Inventory";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/DashboardPage";

function App() {
    return (
        <MainLayout>
            <Routes>
                {/* Redirect root to Home */}
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                 <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={<Product />}
                />

                <Route
                    path="/orders"
                    element={<Order />}
                />

                <Route
                    path="/inventory"
                    element={<Inventory />}
                />

                <Route
                    path="/payments"
                    element={<Payment />}
                />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </MainLayout>
    );
}

export default App;