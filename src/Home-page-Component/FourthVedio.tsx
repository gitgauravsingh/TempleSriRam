import React, { useEffect, useState } from "react";
import Style from "./fourthvedio.module.scss";
import Hanumanji from "./Hanumanji";
import SriRam from "./SriRam";
import SriRamPage from "./SriRampage";

interface Ivediofourth {
  isVediodatafourth: any;
  setIsVediodatafourth: any;
}

const FourthVedio: React.FC<Ivediofourth> = ({
  isVediodatafourth,
  setIsVediodatafourth,
}) => {
  const [isSriRamPagedata, setIsSriRamPagedata] = useState(false);
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
    setIsShowdata(false);
    setIsSriRamPagedata(true);
  };

  return (
    <>
      {isShowdata && (
        <>
          {isVediodatafourth && (
            <div className={Style.vediodata}>
              <video loop autoPlay style={{ objectFit: "cover" }}>
                <source
                  src="https://dvf7opio6knc7.cloudfront.net/video_v2/Mandir_Darshan.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={Style.button} onClick={handleClick}>
                <a href="#">Skip</a>
              </div>
            </div>
          )}
        </>
      )}
      <SriRamPage
        isSriRamPage={isSriRamPagedata}
        setIsSriRamPage={setIsSriRamPagedata}
      />
    </>
  );
};

export default FourthVedio;
