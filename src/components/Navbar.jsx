import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = ({logoTitle}) => {

    const linkClass = ({ isActive }) =>
        isActive ? 'menu-item active' : 'menu-item';

    const mobileLinkClass = ({isActive}) =>
        isActive ? 'mobile-menu-item active' : 'mobile-menu-item';

    return (
        <>
        <div className="main-header">
            <div className="container">
                <div className="container-wrapper">
                    <div className="container-wrapper__logo-area">
                        <Link to="/first-react-project"><p>{logoTitle}</p></Link>
                    </div>
                    <div className="container-wrapper__menu-area">
                        <div className="menu-items">
                           <NavLink className={linkClass} to={'/all-services'}>Book Now</NavLink>
                           <NavLink className={linkClass} to={'/get-in-touch'}>Get in Touch</NavLink>
                        </div>
                    </div>
                    <div className="open-menu-button">
                    <svg fill="#FFF" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fillRule="evenodd"/>
                    </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-header">
            <div className="container">
                <div className="close-button-area">
                    <span className="close-menu-button">
                    <svg width="100%" height="100%" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446">
                                    </polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    </span>
                </div>
                <div className="mobile-menu-area">
                    <div className="mobile-menu-items">
                        <NavLink className={mobileLinkClass} to={'/'}>Home</NavLink>
                        <NavLink className={mobileLinkClass} to={'/all-services'}>Book Now</NavLink>
                        <NavLink className={mobileLinkClass} to={'/get-in-touch'}>Get in Touch</NavLink>
                    </div>   
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;