// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./Loader";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { Toaster } from "react-hot-toast";
import Dashboards from "./Users/Components/Dashboard/Dashboards";
import KycApp from "./Users/Pages/KycApp";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute
import Settings from "./Users/Pages/Settings";
import WithdrawalForm from "./Users/Pages/WithdrawalForm";
import CopyTrading from "./Users/Pages/CopyTrading";
import AdminDashboards from "./Admin/Components/Dashboard/Dashboards";
import AdminAddTrader from "./Admin/Pages/AdminAddTrader";
import Traders from "./Admin/Pages/Traders";
import Users from "./Admin/Pages/Users";
import TraderDetail from "./Users/Pages/TraderDetail";
import FundWallet from "./Users/Pages/FundWallet";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <ErrorBoundary>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kyc" element={<KycApp />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              <Route path="/admin" element={<AdminDashboards />} />
              <Route path="/add-traders" element={<AdminAddTrader />} />
              <Route path="/traders" element={<Traders />} />
              <Route path="/user-edit" element={<Users />} />

              {/* Protected Routes */}

              <Route
                path="/trader/:id"
                element={<ProtectedRoute element={<TraderDetail />} />}
                exact
              />
              <Route
                path="/fund-wallet"
                element={<ProtectedRoute element={<FundWallet />} />}
                exact
              />
              <Route
                path="/settings"
                element={<ProtectedRoute element={<Settings />} />}
                exact
              />
              <Route
                path="/withdraw"
                element={<ProtectedRoute element={<WithdrawalForm />} />}
              />
              <Route
                path="/copy-trading"
                element={<ProtectedRoute element={<CopyTrading />} />}
                exact
              />
              <Route path="/dash" element={<Dashboards />} />

              {/* Add more protected routes here */}
            </Routes>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
