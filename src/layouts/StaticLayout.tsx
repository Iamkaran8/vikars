import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const StaticLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <main className="pt-[100px] md:pt-[130px] py-5 lg:px-10 px-3 md:text-16 lg:text-20">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
