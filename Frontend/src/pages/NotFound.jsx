 
import { motion } from "framer-motion";
import notfound from "../assets/notfound.svg";

function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={notfound}
        alt="404 Not Found"
        className="w-64 h-64 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />

      <motion.h1
        className="text-6xl font-bold text-gray-900"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
    </motion.div>
  );
}

export default NotFound;
