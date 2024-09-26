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
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />} >
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/prosignup' element={<SignupForm />} />
          <Route path="/customersignup" element={<CustomerForm />} />
          <Route path="/dashboard/:username" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path="/dashboard/prodashboard/:proname" element={<ProtectedPro><ProDashboard /></ProtectedPro>}/>
          <Route path="/search-results" element={<SearchResultsPage />} />

        </Route>

      </>
    )
  );

  return (

    <GlobalProvider>
      <ProProvider>
      <RouterProvider router={router} />
      </ProProvider>
    </GlobalProvider>
  );
}

export default App;
