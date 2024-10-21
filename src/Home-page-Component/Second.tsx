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
            <div className={Style.overlaydata}>
              <div className={Style.overlaydatabar}>
                <div className={Style.wrapper}>
                  <div className={Style.arrowbar}>
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/collective_p2/Ram%20Mandir%20ka%20Nirmaan.png"
                      alt=""
                    />
                    <div className={Style.imgbar}>
                      <img src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png" />
                    </div>
                    <div className={Style.button} onClick={handleVedioClick}>
                      <a href="#">Enter</a>
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
