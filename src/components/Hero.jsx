import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/anandpanda3")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with the <code className="font-bold">Sumz</code>,
        an article summarizer that transforms lengthy articles into the clear and
        concise summaries
      </h2>
    </header>
  );
};

export default Hero;
