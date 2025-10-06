import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";  // ✅ import

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate(); // ✅ hook for redirect

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login Success:", userCredential.user);

      // Optional: show quick success message
      setMessage(`Login successful! Welcome ${userCredential.user.email}`);

      // ✅ Redirect to homepage
      setTimeout(() => {
        navigate("/");
      }, 1000); // 1s delay so user can see success message
    } catch (error) {
      console.error("Login error:", error);
      setMessage(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#00796E]"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#00796E]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2/3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#00796E] text-white py-2 rounded-md hover:bg-[#005f52] transition"
        >
          Login
        </button>
      </form>

      {/* Message */}
      {message && (
        <div
          className={`mt-4 p-2 rounded text-center ${
            message.includes("successful") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
