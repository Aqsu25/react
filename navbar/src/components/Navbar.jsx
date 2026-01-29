import logo from '/public/comsatsss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfo, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';



function Navbar() {
    const navbar = [
        { id: 1, name: "Home", link: "/", icon: faHome },
        { id: 2, name: "About", link: "/about", icon: faInfo },
        { id: 3, name: "Careers", link: "/careers", icon: faUser },
        { id: 4, name: "Contact", link: "/contact", icon: faPhone }
    ]

    const navLinkStyles = ({ isActive }) => ({
        color: isActive ?
            '#FF0000' :
            '#023E88',
        textDecoration: isActive ? 'none' : 'no-underline',

    });

    return (
        <div>
            <nav className="bg-gray-50 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-10 pl-5" alt="Flowbite Logo" />
                    </Link>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    </div>
                    <div className="flex items-center justify-between gap-5 hidden w-full md:flex md:w-auto md:order-1 text-blue-500" id="navbar-user">
                        {
                            navbar.map((navbar) => (
                                <ul key={navbar.id} style={{ color: "#023E88" }} className="text-sm flex flex-col p-4 md:p-0 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                                    <li key={navbar.id} className='hover:text-gray-500'>
                                        <NavLink to={navbar.link} style={navLinkStyles} className="hover:text-gray-900 block py - 2 px - 3 text - heading rounded hover: bg - neutral - tertiary hover:bg-transparent">
                                            <FontAwesomeIcon icon={navbar.icon} className="nav-icon px-1" />
                                            {navbar.name}
                                        </NavLink>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar