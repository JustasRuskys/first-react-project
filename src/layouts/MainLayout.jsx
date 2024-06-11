import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {

    return (
        <>
        <Navbar 
            logoTitle = 'Fulidhoo Tours'
        />

        <Outlet />

        <Footer 
            logoTitle = 'Fulidhoo Tours'
        />
        </>
    )
}

export default MainLayout;