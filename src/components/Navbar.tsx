import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { useState } from 'react';

const Navigations = [
    { menu: "Home", path: "/" },
    { menu: "Programs", path: "#programs" },
    { menu: "Blogs", path: "/blogs" }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between py-5 relative  lg:px-10 px-3">
            <Link to='/'>
                <img src={logo} alt="Vikars Academy" className='w-[45px] md:w-[64px]' />
            </Link>

            {/* Desktop Menu */}
            <div className='flex space-x-5 font-medium items-center hidden lg:flex'>
                {Navigations.map((item) => (
                    <Link to={item.path} key={item.menu}>{item.menu}</Link>
                ))}
                <button className='px-3 py-2 bg-forest text-cream rounded-[5px]'>Book a call</button>
            </div>

            {/* Hamburger for Mobile */}
            <div className="lg:hidden flex items-center">
                <button onClick={() => setIsOpen(true)} className="focus:outline-none">
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Off-Canvas Right Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col p-6 pt-16 space-y-6">
                    {Navigations.map((item) => (
                        <Link
                            key={item.menu}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-gray-800 hover:text-forest"
                        >
                            {item.menu}
                        </Link>
                    ))}
                    <button className="px-3 py-2 bg-forest text-cream rounded-[5px]">
                        Book a call
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
                ></div>
            )}
        </nav>
    )
}

export default Navbar
