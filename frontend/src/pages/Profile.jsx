import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const Profile = () => {
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pin, setPin] = useState("");
  const [landmark, setLandmark] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [orgPhoto, setOrgPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOrgPhoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-black flex flex-col align-center justify-center py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Profile</h1>
        <p className="text-gray-600 text-sm mb-10 text-center">
          Provide the details below to complete your profile.
        </p>

        <form className="space-y-10" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Organization Information</h2>
            <input
              type="text"
              placeholder="Organization Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
            />
            <select
              value={orgType}
              onChange={(e) => setOrgType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500 mt-4"
            >
              <option value="" disabled>
                Select Organization Type
              </option>
              <option value="school">School</option>
              <option value="hospital">Hospital/Health Care Centre</option>
              <option value="ngo">Non-governmental Organisation (NGO)</option>
            </select>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
            <input
              type="text"
              placeholder="Street Name"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="City/Village"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Pin Code"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <input
              type="tel"
              placeholder="Contact Number"
              value={contact1}
              onChange={(e) => setContact1(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500"
            />
            <input
              type="tel"
              placeholder="Alternate Contact Number"
              value={contact2}
              onChange={(e) => setContact2(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-500 mt-4"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Organization Photo</h2>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border-2 border-gray-700 flex justify-center items-center cursor-pointer focus:outline-none focus:border-red-500"
              >
                <FiUpload className="h-5 w-5 mr-2" />
                {orgPhoto ? "Change Photo" : "Upload Photo"}
              </label>
              {orgPhoto && (
                <div className="mt-4 flex justify-center">
                  <img src={orgPhoto} alt="Organization" className="w-32 h-32 object-cover rounded-full" />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-400"
          >
            Save Profile
          </button>
        </form>
    </div>
  );
};

export default Profile;
