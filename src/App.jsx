// App.js
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import GlobalProvider from your GlobalContext file
import { GlobalProvider } from './context/GlobalContext';
import Home from './pages/Home';
import LoginComponent from './pages/Login';
import CustomerForm from './pages/CustomerSignUp';
import ProtectedRoute from './components/ProtectedUser';
import ProtectedPro from './components/ProtectedPro';
import Dashboard from './pages/Dashboard';
import ProDashboard from './pages/ProDashboard';
import SignupForm from './pages/ProSignUp';
import { ProProvider } from './context/ProContext';
import SearchResultsPage from './pages/ProSearch';
import ProfilePage from './pages/ProProfile';
import ProtectedProfileRoute from './components/ProtectedProfile';
import AxiosInterceptor from './axios/AxiosIntercepter';
import NotFoundPage from './pages/NotFoundPage';
import MyProfilePro from './pages/MyProfilePro';
import EditProProfile from './pages/EditProProfile';
import MyProfileCustomer from './pages/MyProfileCustomer';
import ProtecetdMyProProfile from './components/ProtecetdMyProProfile';
import ProtectedMyCustomerProfile from './components/ProtectedMyCustomerProfile';
import { ToastProvider } from './context/ToastContext';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />} >
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/prosignup' element={<SignupForm />} />
          <Route path="/customersignup" element={<CustomerForm />} />
          <Route path="/dashboard/:username" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/prodashboard/:proname" element={<ProtectedPro><ProDashboard /></ProtectedPro>} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/profile/:id" element={<ProtectedProfileRoute> <ProfilePage /> </ProtectedProfileRoute>} />
          <Route path="/myprofilepro/:proname" element={<ProtecetdMyProProfile> <MyProfilePro /> </ProtecetdMyProProfile>} />
          <Route path="/myprofilepro/:proname/edit" element={<ProtecetdMyProProfile><EditProProfile /></ProtecetdMyProProfile>}
          />
          <Route path="/myprofilecustomer/:customerName" element={<ProtectedMyCustomerProfile> <MyProfileCustomer /> </ProtectedMyCustomerProfile>} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </>
    )
  );

  return (

    <GlobalProvider>
      <ProProvider>
        <AxiosInterceptor>
        <ToastProvider>
          <RouterProvider router={router} />
          </ToastProvider>
        </AxiosInterceptor>
      </ProProvider>
    </GlobalProvider>
  );
}

export default App;
