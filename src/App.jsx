import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams
} from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />}>
        
        </Route>
      </>
    )
  );


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
