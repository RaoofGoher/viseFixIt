import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams
} from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
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
