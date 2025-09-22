import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { StaticLayout } from "../layouts/StaticLayout"

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StaticLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
