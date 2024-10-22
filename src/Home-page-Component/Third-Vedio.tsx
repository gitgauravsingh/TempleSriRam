import React, { useEffect, useState } from "react";
import Style from "./thirdvideo.module.scss";
import FourthVedio from "./FourthVedio";

interface Ivedio {
  isVediodataThird: any;
  setIsVediodataThird: any;
}

const ThirdVedio: React.FC<Ivedio> = ({
  isVediodataThird,
  setIsVediodataThird,
}) => {
  const [zoomin, setZoomin] = useState(false);
  const [isfourth, setIsfourt] = useState(false);
  const [isShowdata, setIsShowdata] = useState(true);

  useEffect(() => {
    const setheightdata = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setheightdata();
    window.addEventListener("resize", setheightdata);
    return () => window.removeEventListener("resize", setheightdata);
  }, []);

  const handleClick = () => {
    setIsfourt(true);
    setIsShowdata(false);
    setZoomin((prev) => !prev);
  };
  return (
    <>
      {isShowdata && (
        <>
          {isVediodataThird && (
            <div className={Style.vediodata}>
              <video loop autoPlay style={{ objectFit: "cover" }}>
                <source
                  src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/Construction.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={Style.button} onClick={handleClick}>
                <div
                  className={`${zoomin ? Style.zoomin : ""} ${
                    zoomin ? Style.zoomAnimation : ""
                  }`}
                >
                  <a href="#">Continue To Activity</a>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <FourthVedio
        isVediodatafourth={isfourth}
        setIsVediodatafourth={setIsfourt}
      />
    </>
  );
};

export default ThirdVedio;
