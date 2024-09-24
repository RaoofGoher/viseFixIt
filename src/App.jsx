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
import Dashboard from './pages/Dashboard';
import SignupForm from './pages/ProSignUp';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />} >
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/prosignup' element={<SignupForm />} />
          <Route path="/customersignup" element={<CustomerForm />} />
          <Route path="/dashboard/:username" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />

        </Route>

      </>
    )
  );

  return (

    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
