import {useNavigate} from "react-router-dom"

function NoTestimonial() {

    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-6 mt-5 shadow-md w-full text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="No testimonials"
        className="w-24 h-24 mb-4 opacity-70"
      />
      <h2 className="text-xl font-semibold text-fuchsia-700">
        No Testimonials Yet
      </h2>
      <p className="text-white mt-2 max-w-sm">
        Be the first to share your experience! Leave a review and help others
        know about our service.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition "
        onClick={() => navigate("/review")}
      >
        Leave a Review
      </button>
    </div>
  );
}

export default NoTestimonial;
