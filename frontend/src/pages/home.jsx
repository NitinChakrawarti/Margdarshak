import CareerPlanning from "../components/carrier";
import Resources from "../components/resources";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="bg-gray-50 pt-20 md:pt-24 pb-10 px-5 md:px-10 lg:px-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center mb-10 mt-20">
          <h1 className="text-[5vmax] md:text-[5vmax] font-bold text-gray-800">
            Welcome to <span className="text-yellow-700">मार्गदर्शक</span>
          </h1>
          <p className="mt-4 text-gray-600 md:text-xl">
            Discover your strengths, set goals, and find tailored <br />
            opportunities for your career growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 md:my-44">
          <div className="text-center md:text-left max-w-md">
            <h2 className="md:text-2xl font-semibold text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="mt-2 text-gray-600">
              Take our initial assessment to receive personalized career advice,
              job recommendations, and more.
            </p>
          </div>
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 px-6 py-3 bg-yellow-700 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Start Your Journey
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="bg-white py-16 px-5 md:px-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-center text-3xl font-bold text-gray-800 mb-8"
          variants={fadeIn}
        >
          Why Choose मार्गदर्शक?
        </motion.h2>
        <div className="py-16 px-5 md:px-10 lg:px-20 bg-gray-50 flex gap-4">
          {[
            {
              title: "Personalized Guidance",
              description:
                "Receive tailored recommendations for career paths and skill-building opportunities.",
            },
            {
              title: "Expert Resources",
              description:
                "Access a curated library of tools, courses, and job portals to accelerate your growth.",
            },
            {
              title: "Community Support",
              description:
                "Join a thriving community of professionals and mentors to guide your journey.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-none hover:duration-300 "
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-yellow-700">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Career Planning and Resources */}
      <motion.div
        className="py-16 px-5 md:px-10 lg:px-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <CareerPlanning />
        <Resources />
      </motion.div>

      {/* Testimonials Section */}
      <motion.section
        className="bg-gray-50 py-16 px-5 md:px-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-center text-3xl font-bold text-gray-800 mb-8"
          variants={fadeIn}
        >
          What Our Users Say
        </motion.h2>
        <div className="py-16 px-5 md:px-10 lg:px-20 bg-gray-50 flex gap-4">
          {[
            {
              feedback:
                "मार्गदर्शक transformed my career! The personalized guidance and resources helped me secure my dream job.",
              name: "Aditi Sharma",
            },
            {
              feedback:
                "The career assessment was spot-on. It helped me identify my strengths and work on my weaknesses.",
              name: "Ravi Verma",
            },
            {
              feedback:
                "I love the resources section. It’s like having a personal mentor available 24/7.",
              name: "Priya Khanna",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-none transition-shadow duration-300"
              variants={fadeIn}
            >
              <p className="text-gray-600">{testimonial.feedback}</p>
              <h4 className="mt-4 font-semibold text-yellow-700">
                - {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="bg-white py-16 px-5 md:px-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-center text-3xl font-bold text-gray-800 mb-8"
          variants={fadeIn}
        >
          Meet Our Team
        </motion.h2>
        <div className="flex justify-center items-center py-8">
          <div className="grid md:grid-cols-3 gap-24">
            {[
              { name: "Nitin Chakrawarti", role: "Founder & Developer" },
              { name: "Prerit Kushwaha", role: "Career Advisor" },
              { name: "Deepak Singh", role: "Content Strategist" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <img
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <h4 className="mt-4 font-semibold text-yellow-700">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="bg-gray-50 py-16 px-5 md:px-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "How does Margdarshak work?",
              answer:
                "मार्गदर्शक helps you explore your strengths, identify goals, and access resources for career growth through assessments and expert guidance.",
            },
            {
              question: "Is Margdarshak free to use?",
              answer:
                "Yes, the platform offers free resources and guidance. However, some premium features may require a subscription.",
            },
            {
              question: "Can I connect with mentors on the platform?",
              answer:
                "Absolutely! मार्गदर्शक allows you to connect with experienced mentors who can guide you on your journey.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="group  p-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white px-4 md:px-16 mx-28"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <summary
                className="font-semibold text-gray-800 cursor-pointer group-hover:text-yellow-700 transition-colors duration-300"
              >
                {faq.question}
              </summary>
              <div
                className="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40"
              >
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


    </>
  );
};

export default Home;
