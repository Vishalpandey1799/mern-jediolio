import { useState } from "react";
import GridLayout from "../../Component/GridLayout/Gridlayout";
import Apicalls from "../../store/apicalls.js";
import toast from "react-hot-toast";

const Review = () => {
  const { giveFeedback, isFeedback } = Apicalls();

  const [review, setReview] = useState({
    id: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!review.id || !review.review) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await giveFeedback(review);

      setReview({ id: "", review: "" });
    } catch (error) {
      toast.error("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 min-h-screen bg-gray-800 bg-center gap-10">
      <div className="w-full lg:w-[450px] h-full bg-white p-8 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Share Your Feedback
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex-1 flex flex-col"
        >
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="userId"
              className="text-sm font-medium text-gray-700"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              name="id"
              value={review.id}
              onChange={handleChange}
              required={true}
              placeholder="Paste Your Profile Id"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col space-y-2 flex-1">
            <label
              htmlFor="review"
              className="text-sm font-medium text-gray-700"
            >
              Review
            </label>
            <textarea
              id="review"
              name="review"
              rows="5"
              value={review.review}
              required={true}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex-1"
              placeholder="Write your review here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-700 transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {isFeedback ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      <div className="w-full lg:w-[450px] h-full bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
        <GridLayout />
      </div>
    </div>
  );
};

export default Review;
