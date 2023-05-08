import React, { useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import { useState } from "react";

const BotResponse = ({ response, chatLogRef }) => {
  const [botResoponse, setBotResponse] = useState("");
  const [isPrinting, setIsPrinting] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    let index = 1;
    let msg = setInterval(() => {
      if (response !== " - The Ultimate AI Math Solver") {
        setIsButtonVisible(true);
      }
      if (!isPrinting) {
        // if isPrinting is false, clear interval and return
        clearInterval(msg);
        return;
      }
      setBotResponse(response.slice(0, index));
      if (index >= response.length) {
        clearInterval(msg);
        setIsButtonVisible(false);
      }
      index++;

      // scroll to the bottom of the page whenever the messages array is updated
      if (chatLogRef !== undefined) {
        chatLogRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 10);
    return () => clearInterval(msg); // clear interval on component unmount
  }, [chatLogRef, response, isPrinting]);

  const stopPrinting = () => setIsPrinting(!isPrinting);

  const color =
    response === " - The Ultimate AI Math Solver" ? "#3498db" : "#000000";

  return (
    <div style={{ marginTop: "50px", color: color }}>
      <pre>
        <ReactMarkdown>
        {botResoponse}
        </ReactMarkdown>
      </pre>
      {/* {isButtonVisible && (
        <button className="stop-messgage" onClick={stopPrinting}>
          {isPrinting ? "Stop Message" : "Regenerate Message"}
        </button>
      )} */}
    </div>
  );
};

export default BotResponse;
