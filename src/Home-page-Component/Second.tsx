import React, { useState } from "react";
import Style from "./second.module.scss";
import ThirdVedio from "./Third-Vedio";

interface ISecond {
  second: any;
  setSecond: any;
}

const Second: React.FC<ISecond> = ({ second, setSecond }) => {
  const [showbar, setShowbar] = useState(true);
  const [isVedioVisible, setIsVedioVisible] = useState(false);

  const handleVedioClick = () => {
    setIsVedioVisible(true);
    setShowbar(false);
  };

  return (
    <>
      {showbar && (
        <>
          {second && (
            <div className={Style.seconddata}>
              <div className={Style.overlaydata}>
                <div className={Style.wrapper}>
                  <div className={Style.dotdatabar}></div>
                  <div className={Style.dotbar}>
                    <span>
                      <img
                        src="https://dvf7opio6knc7.cloudfront.net/satyugImages/game-archery-2.png"
                        alt=""
                      />
                    </span>
                    <div className={Style.imgdata}>
                      <img
                        src="https://dvf7opio6knc7.cloudfront.net/collective_p2/Ram%20Mandir%20ka%20Nirmaan.png"
                        alt=""
                      />
                    </div>
                    <div className={Style.button} onClick={handleVedioClick}>
                      <a href="#">Enter</a>
                    </div>
                    <div className={Style.text}>
                      <h2>Ram Mandir Ka Nirman</h2>
                    </div>
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
