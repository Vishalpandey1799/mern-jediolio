
import express from "express";

const router = express.Router();
 
 
import { createProfile, getAll, getProfile, getReviews, hardcodeData, reviewData, newFeedback, } from "../controllers/cardRoutes.js";


router.post("/create/profile",createProfile)
router.get("/portfolio/:slug", getProfile)
router.post("/hard", hardcodeData)
router.get("/all", getAll)
router.get("/reviews/:id", getReviews)
router.get("/allreview", reviewData)
router.patch("/updated/:id", newFeedback)


export default router;