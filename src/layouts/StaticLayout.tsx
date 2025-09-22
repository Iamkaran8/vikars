import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const StaticLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}