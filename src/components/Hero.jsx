import React from "react";
import {genielogo2} from "../assets";

function Hero() {
  return (
    <header className="w-full flex items-center justify-center flex-col">
      <nav className="flex w-full items-center justify-between mb-10 pt-4">
        <div className="flex items-center">
          {/* <img src={logo} alt="logo" className="w-28 object-contain " /> */}
          <img src={genielogo2} alt="logo" className="w-28 h-16 object-contain"/>
          <h2 className="logo_text">GENIE<sub>summarizer</sub></h2>
        </div>
        <button
          type="button"
          onClick={() => window.open("https://github.com/Animesh239")}
          className="black_btn"
        >
          {" "}
          source code{" "}
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
}

export default Hero;
