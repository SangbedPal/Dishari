import React from "react";
import Images from "../components/Images.jsx";
import Feedback from "../components/Feedback.jsx";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.jsx";
import Quotes from "../components/Quotes.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <header className="flex justify-between items-center mx-10 py-3 bg-white">
        <h1 className="text-[#29af8a] text-5xl font-serif">Dishari</h1>
        <div className="flex gap-4">
          <Link to="/sign-in">
            <button className="px-5 py-1 rounded-3xl bg-[#29af8a] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"> Sign In </button>
          </Link>
        </div>
      </header>

      <Images />

      <Quotes />

      <FrequentlyAskedQuestions />

      <Feedback />
    </div>
  );
};

export default Home;
