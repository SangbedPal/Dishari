import React from "react";
import { FiUpload } from "react-icons/fi";

const Profile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
  };

  return (
    <div className="min-h-screen text-black flex justify-center items-center py-8">
      <div className="w-[40rem] p-8 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Profile</h1>
        <p className="text-gray-600 text-sm mb-10 text-center">
          Provide the details below to complete your profile.
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Organization Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="orgName"
                placeholder="Organization Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
              />
              <select
                name="orgType"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
              >
                <option value="" disabled>
                  Select Organization Type
                </option>
                <option value="school">Government School</option>
                <option value="hospital">Government Hospital</option>
                <option value="ngo">Non-governmental Organisation (NGO)</option>
              </select>
              <div>
                <label
                  htmlFor="file-upload"
                  className="w-full px-4 py-3 rounded-lg bg-[#29af8a] text-white flex justify-center items-center cursor-pointer"
                >
                  <FiUpload className="h-5 w-5 mr-2" />
                  Upload Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  id="file-upload"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="streetName"
                placeholder="Street Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City/Village"
                  className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                />
                <input
                  type="text"
                  name="district"
                  placeholder="District"
                  className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="pin"
                  placeholder="Pin Code"
                  className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                />
                <input
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                  className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <input
                type="tel"
                name="contact1"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
              />
              <input
                type="tel"
                name="contact2"
                placeholder="Alternate Contact Number"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-[#29af8a] text-white font-semibold"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
