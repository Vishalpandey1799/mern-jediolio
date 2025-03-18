import { motion } from "framer-motion";  
import DemoProfile from "../DemoProfile/DemoProfile";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 bg-gray-50 pt-16 md:pt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <motion.div
        className="w-full md:w-[60%] lg:w-[55%] flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0 mt-15"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          variants={childVariants}
        >
          Build your <span className="text-blue-600">Portfolio</span> Instantly
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xl mt-4"
          variants={childVariants}
        >
          No signup required, create & share your portfolio in just one click!
        </motion.p>

        <motion.button
          onClick={() => navigate("/create")}
          className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}  
        >
          Get Yours 🚀
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-[40%] lg:w-[45%] flex justify-center md:justify-end"
        variants={childVariants}
      >
        <DemoProfile />
      </motion.div>
    </motion.div>
  );
};

export default Home;