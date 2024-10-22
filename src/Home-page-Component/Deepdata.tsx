import React, { useEffect, useState } from "react";
import Style from "./second.module.scss";
import ThirdVedio from "./Third-Vedio";
import Hanumanji from "./Hanumanji";
import DeepVideo from "./DeepVideo";

interface ISecond {
  isDeepdata: any;
  setIsDeepdata: any;
}

const Deepdata: React.FC<ISecond> = ({ isDeepdata, setIsDeepdata }) => {
  const [showbar, setShowbar] = useState(true);
  const [isdeepVedio, setIsdeepVedio] = useState(false);

  useEffect(() => {
    const setheightdata = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setheightdata();
    window.addEventListener("resize", setheightdata);
    return () => window.removeEventListener("resize", setheightdata);
  }, []);

  const handleVedioClick = () => {
    setIsdeepVedio(true);
    setShowbar(false);
  };

  return (
    <>
      {showbar && (
        <>
          {isDeepdata && (
            <div className={Style.overlaydata}>
              <div className={Style.wrapper}>
                <div className={Style.backbutton}>
                  <img
                    src="https://dvf7opio6knc7.cloudfront.net/satyugImages/back-icon.png"
                    alt=""
                  />
                  <a href="">Back</a>
                </div>
                <div className={Style.arrowbar}>
                  <img
                    className={Style.imgbar}
                    src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png"
                  />
                  <div className={Style.mainimg}>
                    <video
                      autoPlay
                      loop
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <source
                        src={`${process.env.PUBLIC_URL}/ShriRam-dewwali-vedio.webm`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className={Style.button} onClick={handleVedioClick}>
                    <a href="#">Enter</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <DeepVideo
        isdeepVediodata={isdeepVedio}
        setIsdeepVediodata={setIsdeepVedio}
      />
    </>
  );
};

export default Deepdata;
