import React, { useEffect, useState } from "react";
import Style from "./vedio.module.scss";
import Second from "./Second";
import Hanumanji from "./Hanumanji";

interface Ivedio {
  isdeepVediodata: any;
  setIsdeepVediodata: any;
}

const DeepVideo: React.FC<Ivedio> = ({
  isdeepVediodata,
  setIsdeepVediodata,
}) => {
  const [isHanumanjidata, setIsHanumanjidata] = useState(false);
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
    setIsHanumanjidata(true);
    setIsShow(false);
  };

  return (
    <>
      {isShow && (
        <>
          {isdeepVediodata && (
            <div className={Style.vediodata}>
              <video autoPlay loop style={{ objectFit: "cover" }}>
                <source
                  src="c:\Users\ms\Downloads\ayodhyawale ayodhya explore rammandir ayodhyadeepotsav  Ayodhya Deepotsav Ayodhya Deepotsav Ram Mandir Diwali .mp4"
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
      <Hanumanji
        ishanumanji={isHanumanjidata}
        setIshanumanji={setIsHanumanjidata}
      />
    </>
  );
};

export default DeepVideo;
