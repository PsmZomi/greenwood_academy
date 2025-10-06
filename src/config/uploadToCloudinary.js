import axios from "axios";

export async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET // from your .env
  );

  const res = await axios.post(
    import.meta.env.VITE_CLOUDINARY_URL, // e.g. https://api.cloudinary.com/v1_1/<cloud_name>/upload
    formData
  );

  return res.data.secure_url; // returns hosted image/video URL
}
