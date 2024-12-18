import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import LoginComponent from "./pages/Login";
import CustomerForm from "./pages/CustomerSignUp";
import ProtectedRoute from "./components/ProtectedUser";
import ProtectedPro from "./components/ProtectedPro";
import Dashboard from "./pages/Dashboard";
import ProDashboard from "./pages/ProDashboard";
import SignupForm from "./pages/ProSignUp";
import { ProProvider } from "./context/ProContext";
import SearchResultsPage from "./pages/ProSearch";
import ProfilePage from "./pages/ProProfile";
import ProtectedProfileRoute from "./components/ProtectedProfile";
import AxiosInterceptor from "./axios/AxiosIntercepter";
import NotFoundPage from "./pages/NotFoundPage";
import MyProfilePro from "./pages/MyProfilePro";
import EditProProfile from "./pages/EditProProfile";
import MyProfileCustomer from "./pages/MyProfileCustomer";
import ProtecetdMyProProfile from "./components/ProtecetdMyProProfile";
import ProtectedMyCustomerProfile from "./components/ProtectedMyCustomerProfile";
import { ToastProvider } from "./context/ToastContext";
import EditCustomerProfile from "./pages/EditCustomerProfile";
import EmailVerification from "./pages/EmailVerification";
import { AvailabilityProvider } from "./context/AvailabilityContext";
import DashboardLayout from "./layouts/DashboardLayout";
import "@fontsource/lato";
import RequestAceptPage from "./pages/RequestAceptPage";
import RequestRejectPage from "./pages/RequestRejectPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Support from "../src/pages/Support";
import CallUs from "../src/components/CallUs";
import Customer from "./pages/Customer";
import AdminDashboard from "./pages/AdminDashboard";
import UserDetailPage from "./pages/UserDetailPage";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import PartnersWithUs from "./pages/PartnersWithUs";
import CareerPage from "./pages/CareerPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/prosignup" element={<SignupForm />} />
          <Route path="/customersignup" element={<CustomerForm />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/search-results/:id" element={<SearchResultsPage />} />
          <Route
            path="/profile/:id"
            element={
              <ProtectedProfileRoute>
                {" "}
                <ProfilePage />{" "}
              </ProtectedProfileRoute>
            }
          />
          <Route path="/activate/:uid/:token" element={<EmailVerification />} />
          <Route path="/accepted/:id" element={<RequestAceptPage />} />
          <Route path="/rejected/:id" element={<RequestRejectPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/support" element={<Support />} />
          <Route
            path="/form"
            element={<CallUs buttonText="Call Us" buttonLink="/form" />}
          />
          <Route path="/customer" element={<Customer />} />
          <Route path="/patners" element={<PartnersWithUs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/Community" element={<CommunityPage/>}/>
        </Route>

        {/* Admin Dashboard Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminDashboardLayout>
              <AdminDashboard />
            </AdminDashboardLayout>
          }
        />
        <Route
          path="/admin/dashboard/user/:username"
          element={
            <AdminDashboardLayout>
              <UserDetailPage />
            </AdminDashboardLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            path="/dashboard/:username"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/prodashboard/:proname"
            element={
              <ProtectedPro>
                <ProDashboard />
              </ProtectedPro>
            }
          />
          <Route
            path="/dashboard/myprofilepro/:proname"
            element={
              <ProtecetdMyProProfile>
                {" "}
                <MyProfilePro />{" "}
              </ProtecetdMyProProfile>
            }
          />
          <Route
            path="/dashboard/myprofilepro/:proname/edit"
            element={
              <ProtecetdMyProProfile>
                <EditProProfile />
              </ProtecetdMyProProfile>
            }
          />
          <Route
            path="/dashboard/myprofilecustomer/:customerName"
            element={
              <ProtectedMyCustomerProfile>
                {" "}
                <MyProfileCustomer />{" "}
              </ProtectedMyCustomerProfile>
            }
          />
          <Route
            path="/dashboard/myprofilecustomer/:customername/edit"
            element={
              <ProtectedMyCustomerProfile>
                <EditCustomerProfile />
              </ProtectedMyCustomerProfile>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );

  return (
    <GlobalProvider>
      <ProProvider>
        <AvailabilityProvider>
          <AxiosInterceptor>
            <ToastProvider>
              <React.StrictMode>
                <RouterProvider router={router} />
              </React.StrictMode>
            </ToastProvider>
          </AxiosInterceptor>
        </AvailabilityProvider>
      </ProProvider>
    </GlobalProvider>
  );
}

export default App;
