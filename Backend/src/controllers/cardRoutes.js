 
import { CardDetails } from "../Models/CardModel.js";
import slugify from "slugify";
import crypto from "crypto";
import cloudinary from "../config/cloudinary.js";
 
 
 
 


export const createProfile = async (req, res) => {
    try {
      const { name, bio, profession, socialLinks, skills, reviews , profileImage } = req.body;
    
       
      if (!profileImage) {
        return res.status(400).json({ message: "Profile Image URL is required!" });
      }
 

   
  
      const newProfileCard = new CardDetails({
        name,
        bio,
        profileImage,
        profession: profession.split(",").map((pro) => pro.trim()),
        socialLinks,
        skills: skills.split(",").map((pro) => pro.trim()),
        reviews,
      });
  
      await newProfileCard.save();
  
      res.status(200).json({ message: "New profile Created!", status: true, profile: newProfileCard });
    } catch (error) {
      console.log("Error in create profile", error);
      res.status(500).json({ message: "Something went wrong!", error: error.message });
    }
  };
  





export const getProfile = async (req, res) => {
    const { slug } = req.params;




    const user = await CardDetails.findOne({slug}).lean();

    if (!user || !slug) {
        return res.status(404).json({ message: "No user found !" })
    }

    res.status(200).json({ message: "Found a user ! ", status: true, user: user })


}


export const getAll = async (req, res) => {
    const users = await CardDetails.find()
    res.status(200).json({ message: "All Users", status: true, users: users })
}


export const hardcodeData = async (req, res) => {
    const hardcodedUsers = [
        {
            name: "Ayantika Sharma",
            bio: "Full-stack wizard crafting elegant solutions to complex problems.",
            skills: ["JavaScript", "React", "Node.js", "MongoDB", "Tailwind"],
            profession: ["Full Stack Developer"],
            profileImage: "https://i.pravatar.cc/150?img=1",
            socialLinks: [
                "https://github.com/aryansharma",
                "https://www.linkedin.com/in/aryansharma",
                "https://twitter.com/aryan_codes",
                "https://aryansharma.dev"
            ],
            reviews: "Super quick and easy to use! Literally built my portfolio in seconds. Love the minimal effort needed."
        },
        {
            name: "Sneha Patel",
            bio: "Bridging frontend beauty with backend brains.",
            skills: ["Vue.js", "Django", "Python", "CSS", "Figma"],
            profession: ["Frontend Developer"],
            profileImage: "https://i.pravatar.cc/150?img=10",
            socialLinks: [
                "https://github.com/snehapatel",
                "https://www.linkedin.com/in/snehapatel",
                "https://twitter.com/sneha_ui",
                "https://snehapatel.dev"
            ],
            reviews: "Finally a portfolio maker that doesn't require me to sign up! Just enter details and done. Super smooth experience."
        },
        {
            name: "Liam Johnson",
            bio: "Data scientist transforming numbers into insights.",
            skills: ["Python", "Pandas", "Machine Learning", "TensorFlow"],
            profession: ["Data Scientist"],
            profileImage: "https://i.pravatar.cc/150?img=22",
            socialLinks: [
                "https://github.com/liamjohnson",
                "https://www.linkedin.com/in/liamjohnson",
                "https://www.kaggle.com/liamjohnson",
                "https://liamjohnson.ai"
            ],
            reviews: "I needed a quick portfolio to showcase my projects, and this was perfect. The best part? No hassle, no unnecessary steps!"
        },
        {
            name: "Emily Davis",
            bio: "Security enthusiast, making the web a safer place.",
            skills: ["Cybersecurity", "Ethical Hacking", "Kali Linux", "Python"],
            profession: ["Cybersecurity Analyst"],
            profileImage: "https://i.pravatar.cc/150?img=45",
            socialLinks: [
                "https://github.com/emilydavis",
                "https://www.linkedin.com/in/emilydavis",
                "https://twitter.com/emily_secure",
                "https://emilydavis.security"
            ],
            reviews: "It took me less than a minute to set up my portfolio. This is honestly one of the simplest tools I've used!"
        },
        {
            name: "Joe Smith",
            bio: "Blockchain believer, building decentralized futures.",
            skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
            profession: ["Blockchain Developer"],
            profileImage: "https://i.pravatar.cc/150?img=15",
            socialLinks: [
                "https://github.com/aishakhan",
                "https://www.linkedin.com/in/aishakhan",
                "https://twitter.com/aisha_web3",
                "https://aishakhan.dev"
            ],
            reviews: "I wasn't expecting it to be this simple. A few clicks and boom—portfolio ready to share!"
        }
    ];

    try {
        const insertedUsers = await Promise.all(
            hardcodedUsers.map(async (user) => {
                const newUser = await CardDetails.create({
                    ...user,
                    slug: `${slugify(user.name, { lower: true, strict: true })}-${crypto.randomBytes(3).toString("hex")}`
                });
                return newUser;
            })
        );
      
        

        res.status(200).json({message : "User Created" , Status : true , users : insertedUsers})

    } catch (error) {
        console.error("Error creating hardcoded users:", error);
        res.status(500).json({ message: "Failed to create hardcoded users", error: error.message });
    }
};




export const getReviews = async (req, res) => {

    try {
        const { id } = req.params;
     

        if (!id) {
            return res.status(404).json({ message: "No id provided !" })
        }

        const isUser = await CardDetails.findById(id);

        if (!isUser) {
            return res.status(404).json({ message: "No data found !" })
        }

        const { name, reviews, profileImage } = isUser;

        res.status(200).json({ message: "Found data ! ", status: true, data: name, reviews, profileImage })
    } catch (error) {
        console.log("error in reviews");
    }

}

export const reviewData = async (req, res) => {
    try {
        const user = await CardDetails.find();



        const onlyReviews = user
            .filter(user => user.reviews && user.reviews.length > 0)
            .map(({ name, profileImage, reviews, profession }) => ({
                name,
                profileImage,
                reviews,
                profession,
            }));



        res.status(200).json({ status: true, reviews: onlyReviews })
    } catch (error) {
        console.log("Error in review data")
    }
}



export const newFeedback = async (req, res) => {
    try {
      const { reviews } = req.body;  
      const { id } = req.params;
  
     
  
      if (!reviews) {
        return res.status(400).json({ message: "Reviews field is required!" });
      }
  
      const isUser = await CardDetails.findById(id);
      if (!isUser) {
        return res.status(404).json({ message: "No User With This Id" });
      }
  
      const updatedUser = await CardDetails.findByIdAndUpdate(
        id,
        { reviews },  
        { new: true }
      );
  
      res.status(200).json({
        message: "Updated User With Review",
        status: true,
        user: updatedUser,
      });
    } catch (error) {
      console.error("Error from updating:", error);
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  };

 

