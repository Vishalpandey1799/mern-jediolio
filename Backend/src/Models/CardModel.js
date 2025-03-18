import mongoose from "mongoose";
import slugify from "slugify"
import crypto from 'crypto'
 

const cardDetailsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        bio: { type: String, required: true, trim: true },
        slug:{type : String},
        profileImage: { type: String, required: true },
        profession: {
            type: [String],
            required: true,
            validate: [(val) => val.length > 0 && val.length <= 5, "You must select between 1 to 5 professions"],
        },
        socialLinks: {
            type: [String],
            required: true,
            validate: [(val) => val.length > 0, "at leaset one skill is required"]

        },
        skills: {
            type: [String],
            required: true,
            validate: [(val) => val.length > 0, "At least one skill is required"],
        },
        reviews: { type: String },
 
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

 
cardDetailsSchema.pre("save" , async function(next){
    if(!this.isModified("name")) return next();

    let baseSlug = slugify(this.name , {lower : true , strict : true});

    let uniqueId = crypto.randomBytes(3).toString("hex");

    this.slug = `${baseSlug}-${uniqueId}`

    next();
})




export const CardDetails = mongoose.model("CardDetails", cardDetailsSchema);
