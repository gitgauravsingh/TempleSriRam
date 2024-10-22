import React, { useEffect, useState } from "react";
import Style from "./overlay.module.scss";
import Vedio from "./Vedio";

interface IOver {
  data: any;
  setData: any;
}

const Overlay: React.FC<IOver> = ({ data, setData }) => {
  const [showbar, setShowbar] = useState(true);
  const [isVedioVisible, setIsVedioVisible] = useState(false);

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
    setIsVedioVisible(true);
    setShowbar(false);
  };

  return (
    <>
      {showbar && (
        <>
          {data && (
            <div className={Style.overlaydata}>
              <div className={Style.wrapper}>
                <div className={Style.arrowbar}>
                  <img
                    className={Style.imgbar}
                    src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png"
                  />
                  <div className={Style.flagdata}>
                    <img src="https://dvf7opio6knc7.cloudfront.net/satyugImages/welcome-flag.png" />
                  </div>
                  <div className={Style.textdata}>
                    <img src="	https://dvf7opio6knc7.cloudfront.net/satyugImages/welcome-arrow-left.png" />
                    <h2>
                      One slogan, One name <br></br> Jai Shri Ram
                    </h2>
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/satyugImages/welcome-flag-right.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.button} onClick={handleVedioClick}>
                    <a href="#">Click to Enter</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Vedio isVediodata={isVedioVisible} setIsVediodata={setIsVedioVisible} />
    </>
  );
};

export default Overlay;
