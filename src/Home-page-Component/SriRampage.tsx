import React, { useEffect, useState } from "react";
import Style from "./second.module.scss";
import ThirdVedio from "./Third-Vedio";
import SriRam from "./SriRam";

interface ISriRam {
  isSriRamPage: any;
  setIsSriRamPage: any;
}

const SriRamPage: React.FC<ISriRam> = ({ isSriRamPage, setIsSriRamPage }) => {
  const [showbar, setShowbar] = useState(true);
  const [isVedioVisible, setIsVedioVisible] = useState(false);
  const [vedioFirst, setVideoFirst] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const setheightdata = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setheightdata();
    window.addEventListener("resize", setheightdata);
    return () => window.removeEventListener("resize", setheightdata);
  }, []);

  useEffect(() => {
    const mobiledata = () => {
      const videomobile = window.innerWidth <= 768;
      setVideoFirst(videomobile);
    };
    window.addEventListener("resize", mobiledata);
    return () => {
      window.removeEventListener("resize", mobiledata);
    };
  }, []);

  const handleVedioClick = () => {
    setIsVedioVisible(true);
    setShowbar(false);
  };

  return (
    <>
      {showbar && (
        <>
          {isSriRamPage && (
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
                      src={
                        !vedioFirst
                          ? "https://images.bhaskarassets.com/thumb/2048x0/web2images/web-frontend/3D-Ram-Mandir/new-main-bg-v1-desktop-hi.jpg"
                          : "https://images.bhaskarassets.com/thumb/2048x0/web2images/web-frontend/3D-Ram-Mandir/new-main-bg-v1-mobile-hi.jpg"
                      }
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
      <SriRam isSriRam={isVedioVisible} setIsSriRam={setIsVedioVisible} />
    </>
  );
};

export default SriRamPage;
