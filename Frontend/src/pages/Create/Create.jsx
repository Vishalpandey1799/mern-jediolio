import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Apicalls from "../../store/apicalls.js";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Allske from "../../Skeleton/Allske.jsx";
import AllData from "../../Skeleton/AllData.jsx";

const Create = () => {
  const cloudname = import.meta.env.VITE_CLOUD_NAME;
  const navigate = useNavigate();
  const { createPortfolio, isCreating, newSlug, getUser } = Apicalls();

  const [form, setForm] = useState({
    name: "",
    profession: "",
    bio: "",
    skills: "",
    profileImage: "",
  });

  const [socialLinks, setSocialLinks] = useState([""]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vk62_preset");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if(!data) return toast.error("Wait for a while...")

      if (data.secure_url) {
        setForm((prev) => ({ ...prev, profileImage: data.secure_url }));
      }
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed. Try again.");
    }
  };

  const addInput = () => {
    if (socialLinks.length >= 5) {
      toast.error("Wanna make your portfolio bulky? 😏");
      return;
    }
    setSocialLinks([...socialLinks, ""]);
  };

  const handleInputChange = (index, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = value;
    setSocialLinks(updatedLinks);
  };

  const removeInput = (index) => {
    if (socialLinks.length === 1) {
      toast.error("Don't you have social media? 😮");
      return;
    }
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.profession ||
      !form.bio ||
      !form.skills ||
      !form.profileImage
    ) {
      toast.error("Fill all required fields! 🚀");
      return;
    }


    
    const formData = {
      name: form.name,
      bio: form.bio,
      profession: form.profession,
      skills: form.skills,
      profileImage: form.profileImage,
      socialLinks,
    };

    try {
      await createPortfolio(formData);
      await getUser(newSlug);

      toast.success("Profile created successfully! 🎉");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between items-start bg-gray-900 p-4 mt-15">
      <div className="bg-gray-800 p-8 w-full text-white flex flex-col md:flex-row gap-8 justify-between">
        {/* Form Section */}
        <div className="w-full md:w-[400px] h-fit bg-gray-900 p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Create Your Profile
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Profile Image
            </label>
            <input
              type="file"
              className="mt-2 block w-full border p-3 text-gray-700 bg-white"
              onChange={handleImageUpload}
            />
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                autoComplete="off"
                onChange={handleFormChange}
                className="mt-2 block w-full border p-3 text-gray-700 bg-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                autoComplete="off"
                value={form.profession}
                onChange={handleFormChange}
                className="mt-2 block w-full border p-3 text-gray-700 bg-white"
                placeholder="Enter your profession"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Bio
            </label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleFormChange}
              className="mt-2 block w-full border p-3 text-gray-700 bg-white"
              placeholder="Write a short bio"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleFormChange}
              className="mt-2 block w-full border p-3 text-gray-700 bg-white"
              placeholder="Enter your skills (comma-separated)"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Social Media Links
            </label>
            {socialLinks.map((link, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <input
                  type="text"
                  className="block w-full border p-3 text-gray-700 bg-white"
                  placeholder="Enter social media link"
                  value={link}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <button
                  className="bg-black px-3 py-3 hover:bg-white hover:text-red-500 transition cursor-pointer"
                  onClick={() => removeInput(index)}
                >
                  <MdDeleteOutline className="text-fuchsia-800 text-2xl cursor-pointer" />
                </button>
              </div>
            ))}
            <button
              className="mt-2 bg-fuchsia-900 text-white px-3 py-2 hover:bg-black cursor-pointer"
              onClick={addInput}
            >
              + Add Link
            </button>
          </div>

          <button
            className="w-full bg-fuchsia-900 text-white py-3 font-medium hover:bg-black transition flex items-center justify-center cursor-pointer"
            onClick={handleSubmit}
          >
            {isCreating ? (
              <>
                <span>Creating</span> <Loader className="animate-spin ml-2" />
              </>
            ) : (
              "Create Profile"
            )}
          </button>
        </div>

        <div className="flex">{isCreating ? <Allske /> : <AllData />}</div>
      </div>
    </div>
  );
};

export default Create;
