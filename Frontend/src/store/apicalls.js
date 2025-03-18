import { create } from "zustand";
import { axiosInstance } from "../config/axiosInstance.js";
import toast from "react-hot-toast";

const Apicalls = create((set, get) => ({
  isCreating: false,  
  isValid: false,
  allreview: [],
  isLoading: true,
  isFeedback: false,
  newSlug: "",
  userData: null,
 
  allReviews: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/allreview");
      set({ isReview: true, allreview: res.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });

    }
  },

 
  giveFeedback: async (data) => {

    try {
      
      set({ isFeedback: true });
      const res = await axiosInstance.patch(`/updated/${data.id.trim()}`, {
     
        reviews: data.review.trim(),

      });

      if (res.status === 200) {
        set({ isFeedback: false, isValid: true });
        toast.success("Review Added Successfully!");
        await get().allReviews();  
      } 
    } catch (error) {
     
      set({ isFeedback: false });
      toast.error("Failed to submit feedback. Please try again.");
    }
  },

  
  createPortfolio: async (data) => {
    try {
      set({ isCreating: true });


      const res = await axiosInstance.post("/create/profile", data);

      

      if (res.status === 200) {
        set({ newSlug: res.data.profile.slug, isCreating: false });
        
        await get().getUser(res.data.profile.slug);  
      }
    } catch (error) {
      console.log("Error from createPortfolio:", error.response?.data || error.message);
      set({ isCreating: false });
      toast.error("Failed to create profile. Please try again.");
    }
  },

 
  getUser: async (slug) => {
    try {
      if (!slug) return;
      

      const res = await axiosInstance.get(`/portfolio/${slug}`, {
      
      });

      set({ userData: res.data.user });
    } catch (error) {
      console.log("Error from getUser:", error.message);
      toast.error("Failed to fetch user data. Please try again.");
    }
  },
}));

export default Apicalls;