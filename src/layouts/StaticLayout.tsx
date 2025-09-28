import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const StaticLayout = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[100px] md:pt-[130px]  text-16 md:text-20">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
