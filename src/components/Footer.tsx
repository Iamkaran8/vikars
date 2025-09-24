import { Link } from 'react-router-dom'
import logo from '../assets/logofooter.png'

const Footermenus = [
  { menu: "Home", path: "/" },
  { menu: "Solution", path: "/#solutions" },
  { menu: "What We Do", path: "/#what-we-do" },
  { menu: "Contact", path: "/#contact" }
]

export const Footer = () => {
  return (
    <footer className="py-5 lg:px-10 px-3 text-20">
      <div className="bg-cream w-full flex justify-between rounded-[35px] py-20 px-28">
        
        {/* Logo Section */}
        <div className="w-1/3">
          <img src={logo} className="w-[180px]" alt="Vikars academy" />
        </div>

        {/* Contact Info */}
        <div className="w-1/3 space-y-3">
          <p>
            <b>Registered Office</b><br />
            1050 Northgate Dr, Suite #120 San Rafael,<br />
            California 94903, USA
          </p>
          <p><b>Email : </b> contact@hekma.ai</p>
          <p><b>Phone no : </b> ‪+1 415 382 8040‬</p>
        </div>

        {/* Menu Links */}
        <div className="w-1/3">
          <h5 className="font-bold mb-2">About</h5>
          <div className="space-y-2">
            {Footermenus.map((item) => (
              <Link key={item.path} to={item.path} className="block hover:text-primary">
                <h5>{item.menu}</h5>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
