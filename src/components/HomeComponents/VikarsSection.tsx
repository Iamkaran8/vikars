import placeholder from '../../assets/placeholder.png'

const VikarsSection = () => {
    return (
        <section className="px-5 py-10 lg:py-20 cont lg:px-10 ">
            <div className="bg-cream rounded-[36px] p-6 md:p-10 text-center text-20 text-forest font-medium">

                {/* Heading */}
                <h2 className="text-40 font-bold mb-2">
                    More Than Just Tuition — The Vikar’s Way
                </h2>
                <p className="text-[#12402999] mb-8">
                    More Than Just Tuition — A Learning Partner <br /> For Every Child
                </p>

                {/* Center Image Placeholder */}
                <div className="w-full flex justify-center mb-8">
                    <img src={placeholder} alt="placeholder" />
                </div>

                {/* Main Paragraph */}
                <p className="mb-4">
                    At <b>Vikar's Academy</b>, We Don't Just Teach Lessons — We Shape Journeys.
                    Every Child Learns Differently. Some Race Ahead, Some Pause To Explore, And Some Just Need Someone To Believe In
                    Them. That's Why We Created A Space Where <b>Learning Feels Personal, Safe, And Limitless.</b>
                </p>

                <p className="mb-4">
                    Here, Tutors Aren't Just Subject Experts — They Are Mentors, Motivators, And Partners In Growth. They Celebrate
                    Every “Aha!” Moment, Calm Every Doubt, And Slowly Build The One Thing Exams Can't Measure — Confidence.
                </p>

                <p className="mb-4">
                    Parents Trust Us Because We're Transparent. Every Week, You See Progress, Strengths, And The Exact Roadmap Ahead.
                    Students Love Us Because Learning Doesn't Feel Like Pressure Anymore — It Feels Like Discovery.
                </p>

                {/* 3C Promise */}
                <div className="my-8">
                    <p className="mb-4">We Call It The 3C Promise:</p>
                    <b>👉 Confidence To Believe In Themselves</b><br/>
                    <b>👉 Clarity To Master Every Concept</b><br/>
                    <b>👉 Character To Thrive Beyond Exams</b>
                </div>


                <p>
                    Because At Vikar's,<br />
                    It's Never Just About Marks. It's About Giving Your Child
                    <b>The Skills, Courage, And Joy Of Learning That Last A Lifetime.</b>
                </p>
            </div>
        </section>
    )
}

export default VikarsSection
