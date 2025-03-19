import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Apicalls from "../../store/apicalls.js";
import NoTestimonial from "../Notesti/NoTestimonial.jsx";

const Testimonial = () => {
    const { allreview, allReviews } = Apicalls();

    useEffect(() => {
        allReviews();
    }, []);

    return (
        <section id="testimonial" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
                    What People Say
                </h2>

                {allreview.reviews?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allreview.reviews.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    velocity: 2,
                                }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                            >
                                <div className="flex gap-3 items-center" onClick={(e) => e.target}>
                                    <motion.img
                                        src={testimonial.profileImage || "/default-profile.png"}
                                        alt={testimonial.name || "User"}
                                        className="w-16 h-16 rounded-full border-4 border-blue-500"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold">{testimonial.name || "Anonymous"}</h3>
                                        <p className="text-gray-600">{testimonial.profession[0] || "Unknown Profession"}</p>
                                    </div>
                                </div>

                                <div className="text-center relative mt-4">
                                    <FaQuoteLeft className="text-gray-400 text-2xl absolute left-2 top-0" />
                                    <p className="text-gray-600 px-8">"{testimonial.reviews || "No review provided."}"</p>
                                    <FaQuoteRight className="text-gray-400 text-2xl absolute right-2 bottom-0" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-40">
                        <NoTestimonial />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonial;
