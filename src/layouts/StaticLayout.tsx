import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const StaticLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <main className="pt-[100px] min-h-screen">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
