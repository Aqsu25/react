import React from 'react'
import logo from '/public/comsatsss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the specific Facebook icon


function Footer() {
    const services = [{ id: 1, name: "Datacenter", link: "https://css.net.pk/#" },
    { id: 2, name: "Faq", link: "https://css.net.pk/#" },
    { id: 3, name: "Features", link: "https://css.net.pk/#" },
    ]
    const usefulLinks = [{ id: 1, name: "Portfolio", link: "https://css.net.pk/#" },
    { id: 2, name: "Privacy Policy", link: "https://css.net.pk/#" },
    { id: 3, name: "Contacts", link: "https://css.net.pk/#" },
    ]

    const socialLinks = [
        { id: 1, link: "https://css.net.pk/about.html", icon: faFacebook },
        { id: 2, link: "https://css.net.pk/careers.php", icon: faInstagram },
        { id: 3, link: "https://css.net.pk/contact.php", icon: faLinkedin }
    ]
    const currentYear = new Date().getFullYear();


    return (
        <div>
            <footer className="bg-gray-50">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" className="flex items-center">
                                <img src={logo} className="h-10 me-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-black">Cloud Services</h2>
                                {
                                    services.map((service) => (
                                        <ul style={{ color: "#023E88" }}key={service.id} className="text-body font-medium">
                                            <li className="mb-4 normal-case">
                                                <a href={service.link} className="hover:underline">{service.name}</a>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-black">Useful Links</h2>
                                    {
                                        usefulLinks.map((useful) => (
                                            <ul key={useful.id} style={{ color: "#023E88" }} className="text-body font-medium">
                                            <li className="mb-4">
                                                <a href={useful.link} className="hover:underline ">{useful.name}</a>
                                            </li>
                                </ul>

                                        ))
                                    }
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-black" >Legal</h2>
                                <ul style={{ color: "#023E88" }} className="text-body font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <ul style={{ color: "#023E88" }} className="text-body font-medium">
                                {
                                    socialLinks.map((social) => (

                                        <a key={social.id} href={social.link} className="text-body hover:text-heading">
                                            <FontAwesomeIcon icon={social.icon} className="nav-icon px-1" />
                                            <span className="sr-only">Facebook page</span>
                                        </a>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <hr className="my-6 border-default sm:mx-auto lg:my-8" /> */}
                </div>
                <div className="text-center my-2">
                    <span style={{ color: "#023E88" }} className="text-sm text-body text-center">&copy; {currentYear} CSS.All rights reserved.
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer