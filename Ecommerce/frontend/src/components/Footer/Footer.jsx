import React from 'react'
import logo from '/assets/logo (2).png'
import { Link } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
        },
        {
            title: "Need Help?",
            links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div className=''>
                    <img className="w-10 md:w-20 rounded-full" src={logo} />
                    <p className="max-w-[410px] mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link to="#" className="hover:underline transition">{link}</Link>
                                    </li>
                                
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <Link to="https://prebuiltui.com">Ecommerce Store</Link> All Right Reserved.
            </p>
        </div>)
}

export default Footer