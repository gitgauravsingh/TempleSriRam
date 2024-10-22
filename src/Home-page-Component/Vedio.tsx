import React, { useEffect, useState } from "react";
import Style from "./vedio.module.scss";
import Second from "./Second";

interface Ivedio {
  isVediodata: any;
  setIsVediodata: any;
}

const Vedio: React.FC<Ivedio> = ({ isVediodata, setIsVediodata }) => {
  const [issecond, setIssecond] = useState(false);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const setheightdata = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setheightdata();
    window.addEventListener("resize", setheightdata);
    return () => window.removeEventListener("resize", setheightdata);
  }, []);

  const handleSkip = () => {
    setIssecond(true);
    setIsShow(false);
  };

  return (
    <>
      {isShow && (
        <>
          {isVediodata && (
            <div className={Style.vediodata}>
              <video autoPlay loop style={{ objectFit: "cover" }}>
                <source
                  src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/before-game-720.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className={Style.skipbutton} onClick={handleSkip}>
                <h2>Skip</h2>
              </div>
            </div>
          )}
        </>
      )}
      <Second second={issecond} setSecond={setIssecond} />
    </>
  );
};

export default Vedio;
