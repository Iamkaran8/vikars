import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { StaticLayout } from "../layouts/StaticLayout"
import { Thankyou } from "../pages/Thankyou"

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StaticLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="thankyou" element={<Thankyou/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
