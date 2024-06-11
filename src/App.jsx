import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AllServices from './pages/AllServices';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/first-react-project' element={< MainLayout />}>
    <Route index element={< HomePage />} />
    <Route path='first-react-project/all-services' element={< AllServices />} />
    <Route path='*' element={< ErrorPage />} />
    </Route>
    )
);

const App = () => {

    return (
    <RouterProvider router={router} />
    )
    
}

export default App;