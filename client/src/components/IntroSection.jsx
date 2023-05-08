import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Introducing AI Math Wizard
        <BotResponse response=" - The Ultimate AI Math Solver" />
      </h1>
      <h2>
        A cutting-edge AI-powered app that provides instant answers to any math
        question you may have. With AI Math Woard, you'll never be left
        searching for answers again. Whether you need information for school or
        work, or just want to know the latest news, AI Math Wizard has you
        covered.
      </h2>
      Features:
      <ul>
        <li>Instant answers to any math question</li>
        <li>Deep learning technology that improves with usage</li>
        <li>Continuously Learning</li>
        <li>User-friendly interface</li>
        <li>Available 24/7</li>
      </ul>
      <p>
        Say goodbye to endless searching and typing, and say hello to AI Math
        Wizard, your personal AI assistant. Try it now and see for yourself how
        AI Math Wizard can make your life easier.
      </p>
    </div>
  );
};

export default IntroSection;
