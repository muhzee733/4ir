import React from 'react'
// import sound from "../Mic/heather-audio.wav"
import ".././widgets.css";
import { FaMicrophone } from "react-icons/fa";


const Mic = ({ isLoading, handleMicClick, layout  }) => {
  return (
    <div className="mic-sec">
        <div className="mic-div">
        <button
            type="button"
            className={`micbutton ${isLoading ? "loading" : ""}`}
            onClick={handleMicClick}
          >
            {isLoading ? (
              <>
                <svg
                  id="wave"
                  className={isLoading ? "wave-listening" : ""}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 38.05"
                >
                    {Array.from({ length: 9 }).map((_, i) => (
                    <path
                      key={i}
                      id={`Line_${i + 1}`}
                      d={`M${i * 6 + 0.91},${
                        i % 3 === 0 ? 15 : i % 3 === 1 ? 9 : 0
                      }L${i * 6 + 0.78},${
                        i % 3 === 0 ? 15 : i % 3 === 1 ? 9 : 0
                      }A1,1,0,0,0,${i * 6},${
                        i % 3 === 0 ? 16 : i % 3 === 1 ? 10 : 1
                      }V${
                        i % 3 === 0 ? 22 : i % 3 === 1 ? 28 : 37
                      }a1,1,0,1,0,2,0V${
                        i % 3 === 0 ? 16 : i % 3 === 1 ? 10 : 1
                      }a1,1,0,0,0-1-1H${i * 6 + 0.91}Z`}
                      style={{
                        animation: `pulse 1s infinite`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                  
                </svg>
              </>
            ) : (
              
                <FaMicrophone size={35}/>
            )}
            <canvas
              className={`visualizer ${isLoading ? "show" : ""}`}
              style={{ display: isLoading ? "block" : "none" }}
            ></canvas>
        </button>
        {
            layout? "" : <div className="mic_text">{isLoading ? "..." : "Give it a try!"}</div>
          }
    </div>
    </div>
  )
}

export default Mic