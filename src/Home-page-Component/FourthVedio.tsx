import React, { useState } from "react";
import Style from "./fourthvedio.module.scss";
import Hanumanji from "./Hanumanji";

interface Ivediofourth {
  isVediodatafourth: any;
  setIsVediodatafourth: any;
}

const FourthVedio: React.FC<Ivediofourth> = ({
  isVediodatafourth,
  setIsVediodatafourth,
}) => {
  const [ishanumanjidata, setIshanumanjidata] = useState(false);
  const [isShowdata, setIsShowdata] = useState(true);

  const handleClick = () => {
    setIsShowdata(false);
    setIshanumanjidata(true);
  };

  return (
    <>
      {isShowdata && (
        <>
          {isVediodatafourth && (
            <div className={Style.vediodata}>
              <video
                loop
                autoPlay
                style={{ width: "100%", objectFit: "cover", height: "100vh" }}
              >
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
      <Hanumanji
        ishanumanji={ishanumanjidata}
        setIshanumanji={setIshanumanjidata}
      />
    </>
  );
};

export default FourthVedio;
