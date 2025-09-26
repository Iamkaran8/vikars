import { Banner } from "../components/HomeComponents/Banner"
import { BookDemo } from "../components/HomeComponents/BookDemo"
import { Faqs } from "../components/HomeComponents/Faqs"
 import { Program } from "../components/HomeComponents/Program-offered"
 
export const Home = () => {
  return (
    <>
      <Banner/>
      <Program />
      <Faqs />
      <BookDemo/>      
    </>
  )
}
 