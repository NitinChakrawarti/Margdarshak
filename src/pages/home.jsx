import CareerPlanning from "../components/carrier"
import Resources from '../components/resources'
import CareerAssessment from '../components/assistance'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-gray-50 pt-20 md:pt-24 pb-10 px-5 md:px-10 lg:px-20">
        <div className="text-center mb-10 mt-20">
          <h1 className="text-[5vmax] md:text-[5vmax] font-bold text-gray-800">
            Welcome to <span className='text-yellow-700'>मार्गदर्शक</span>
          </h1>
          <p className="mt-4 text-gray-600 md:text-xl">
            Discover your strengths, set goals, and find tailored <br /> opportunities for your career growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 md:my-44">
          <div className="text-center md:text-left max-w-md">
            <h2 className=" md:text-2xl font-semibold text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="mt-2 text-gray-600">
              Take our initial assessment to receive personalized career advice, job recommendations, and more.
            </p>
          </div>
          <Link to="/user">
            <button className="mt-4 md:mt-0 px-6 py-3 bg-yellow-700 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Start Your Journey
            </button>
          </Link>

        </div>
      </section>
      <div>
        <CareerPlanning />
        <Resources />
        {/* <CareerAssessment /> */}
      </div>
    </>
  );
};
export default Home;
