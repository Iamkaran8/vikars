import bannerImg from '../../assets/home-banner.png'
import bannerImg1 from '../../assets/home-textIcon.png'



export const Banner = () => {
  return (
    <div className="flex  justify-center flex-wrap md:flex-row flex-col-reverse container mx-auto pl-8 bg-cream rounded-[36px] sm:pt-4 ">
      <div className="w-full md:w-[50%] flex flex-col justify-center">
        <p className='text-22 font-normal items-center  pt-2'>Trusted by<span className="inline-flex items-center mx-2 mb-[]  ]">
          <img className="w-12" src={bannerImg1} alt="" />

        </span>
          <b>5000+ parents and students</b> across India | 95% Student Retention Rate</p>
        <h1 className="text-coral text-26 sm:text-40 font-extrabold pt-2 pb-0 leading-tight">One-on-One Personalized Classes </h1>
        <h2 className='text-36 sm:text-36 md:text-36 lg:text-48 font-bold font-inter leading-snug pb-2 text-inter '>
          with Expert Tutors<br />
          That Guarantee Results!  </h2>


        <p className='text-20 sm:text-22'>One child. One expert. 100% focus. Personalized 1-on-1 tuition that builds clarity, confidence, and results parents can trust.</p>
        <button className='w-[40%] px-4 py-2 bg-forest text-white rounded-md my-8'>Book & Call</button>
      </div>
      <div className='w-full md:w-[50%] text-right'>
        <img src={bannerImg} alt=" banner" />

      </div>



    </div>
  )
}
export default Banner()
