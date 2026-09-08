import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Members from "./pages/Members/Members";
import Trainers from "./pages/Trainers/Trainers";
import MembershipPlans from "./pages/MembershipPlans/MembershipPlans";
import Attendance from "./pages/Attendance/Attendance";
import Payments from "./pages/Payments/Payments";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        {/* Members */}
        <Route
          path="/members"
          element={
            <MainLayout>
              <Members />
            </MainLayout>
          }
        />

        {/* Trainers */}
        <Route
          path="/trainers"
          element={
            <MainLayout>
              <Trainers />
            </MainLayout>
          }
        />

        {/* Membership Plans */}
        <Route
          path="/plans"
          element={
            <MainLayout>
              <MembershipPlans />
            </MainLayout>
          }
        />

        {/* Attendance */}
        <Route
          path="/attendance"
          element={
            <MainLayout>
              <Attendance />
            </MainLayout>
          }
        />

        {/* Payments */}
        <Route
          path="/payments"
          element={
            <MainLayout>
              <Payments />
            </MainLayout>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />

        {/* Page Not Found */}
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;