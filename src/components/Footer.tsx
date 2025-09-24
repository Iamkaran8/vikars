import { Link } from 'react-router-dom'
import logo from '../assets/logofooter.png'
import { Socials } from '../datas/socials'

const Footermenus = [
  { menu: "Home", path: "/" },
  { menu: "Solution", path: "/#solutions" },
  { menu: "What We Do", path: "/#what-we-do" },
  { menu: "Contact", path: "/#contact" }
]

export const Footer = () => {
  return (
    <footer className="py-5 lg:px-10 px-3 md:text-16 lg:text-20">

      {/* footer details section */}
      <div className="bg-cream w-full rounded-[10px] lg:rounded-[35px] py-8 lg:py-20 px-5 lg:px-28 
                      flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8">

        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-[20%] lg:w-1/5">
          <img src={logo} className="w-[150px] lg:w-[180px]" alt="Vikars academy" />
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-[50%] lg:w-2/5 text-center md:text-left space-y-2 md:space-y-3">
          <h5 className="font-bold">Registered Office</h5>
          <p>1050 Northgate Dr, Suite #120 San Rafael, California 94903, USA</p>
          <p><b>Email :</b> contact@hekma.ai</p>
          <p><b>Phone no :</b> +1 415 382 8040</p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-[15%] lg:w-1/5 text-center md:text-left">
          <h5 className="font-bold mb-3">About</h5>
          <div className="flex flex-col space-y-2 md:space-y-1 lg:space-y-3">
            {Footermenus.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.menu}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className='flex text-gray text-16 font-medium w-full flex-wrap justify-around md:py-5 space-y-3'>
        <p className='text-center md:text-left'>Copyright © 2024 Vikars. All Rights Reserved</p>
        <div className='flex space-x-10'>
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              className="hover:scale-110 transition"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer;
