import logo from '/public/comsatsss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfo, faPhone } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    const navbar = [
        { id: 1, name: "Home", link: "https://css.net.pk/", icon: faHome },
        { id: 2, name: "About", link: "https://css.net.pk/about.html", icon: faInfo },
        { id: 3, name: "Careers", link: "https://css.net.pk/careers.php", icon: faUser },
        { id: 4, name: "Contact", link: "https://css.net.pk/contact.php", icon: faPhone }
    ]
    return (
        <div>
            <nav className="bg-gray-50 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                    <a href="https://css.net.pk/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-10 pl-5" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    </div>
                    <div className="flex items-center justify-between gap-5 hidden w-full md:flex md:w-auto md:order-1 text-blue-500" id="navbar-user">
                        {
                            navbar.map((navbar) => (
                                <ul key={navbar.id} style={{ color: "#023E88" }} className="text-sm flex flex-col p-4 md:p-0 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                                    <li key={navbar.id}>
                                        <a href={navbar.link} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">
                                            <FontAwesomeIcon icon={navbar.icon} className="nav-icon px-1" />
                                            {navbar.name}</a>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar