import React, { useEffect, useState } from "react";
import Style from "./second.module.scss";
import ThirdVedio from "./Third-Vedio";
import Hanumanji from "./Hanumanji";

interface ISecond {
  isDeepdata: any;
  setIsDeepdata: any;
}

const Deepdata: React.FC<ISecond> = ({ isDeepdata, setIsDeepdata }) => {
  const [showbar, setShowbar] = useState(true);
  const [ishanumanjidata, setIshanumanjidata] = useState(false);

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
    setIshanumanjidata(true);
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
      <Hanumanji
        ishanumanji={ishanumanjidata}
        setIshanumanji={setIshanumanjidata}
      />
    </>
  );
};

export default Deepdata;
