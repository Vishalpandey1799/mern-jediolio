import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // 🟢 Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files.length === 0) return; // No file selected
    setImage(e.target.files[0]);
  };

  // 🟢 Handle the image upload
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "vk62_preset"); // Replace with your Cloudinary upload preset

    setLoading(true);
    try {
      // ✅ Send the image to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/diidb8azs/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 👈 Ensure correct content type
          },
        }
      );

      console.log("Full Response:", response);

      // ✅ Get the uploaded image URL
      if (response.data && response.data.secure_url) {
        setUploadedImageUrl(response.data.secure_url);
        console.log("Image uploaded:", response.data.secure_url);
      } else {
        console.error("Upload failed:", response.data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Upload Image to Cloudinary</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {uploadedImageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={uploadedImageUrl}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
