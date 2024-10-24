import React, { useEffect, useState } from "react";
import Style from "./second.module.scss";
import ThirdVedio from "./Third-Vedio";

interface ISecond {
  second: any;
  setSecond: any;
}

const Second: React.FC<ISecond> = ({ second, setSecond }) => {
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
          {second && (
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
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/collective_p2/Ram%20Mandir%20ka%20Nirmaan.png"
                      alt=""
                    />
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
      <ThirdVedio
        isVediodataThird={isVedioVisible}
        setIsVediodataThird={setIsVedioVisible}
      />
    </>
  );
};

export default Second;
