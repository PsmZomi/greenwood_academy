import React, { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Integrate Firebase update logic here
    console.log("Settings saved:", { name, email, password });
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-[70px]">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#00796E] mb-6">Settings</h1>
        
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#00796E]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#00796E]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#00796E]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#00796E] text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
