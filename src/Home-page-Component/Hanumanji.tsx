import React, { useRef, useState } from "react";
import Style from "./hanumanji.module.scss";

interface IHanumanji {
  ishanumanji: any;
  setIshanumanji: any;
}

const Hanumanji: React.FC<IHanumanji> = ({ ishanumanji, setIshanumanji }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const NUM_DROPS = 60;

  const RainDrops = () => {
    return (
      <>
        {Array.from({ length: NUM_DROPS }).map((_, index) => (
          <img
            key={index}
            src={
              "http://www.clker.com/cliparts/n/F/Z/O/p/7/red-rain-drop-hi.png"
            }
            alt="Rain Drop"
            className={Style.dropdata}
            style={{
              animationDelay: `${Math.random() * 3}s`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </>
    );
  };

  return (
    <>
      {ishanumanji && (
        <div className={Style.hanumanjidata}>
          <div className={Style.wrapper}>
            <div className={Style.formdata}>
              <div className={Style.formsec}>
                <div className={Style.imagedata}>
                  <img
                    src="https://dvf7opio6knc7.cloudfront.net/digital-logo1.png"
                    alt=""
                  />
                </div>
                <div className={Style.animation}>
                  <RainDrops />
                </div>
                <div className={Style.formbar}>
                  <form>
                    <div className={Style.Namedata}>
                      <label>Name :</label>
                      <input type="text" name="Enter Your Name" />
                    </div>
                    <div className={Style.Namedata}>
                      <label>Whatsapp :</label>
                      <input type="text" name="+91" />
                      <div className={Style.flagdata}>
                        <img
                          src="https://tse1.mm.bing.net/th?id=OIP.YHufaYYtdq8EtHQRPAx_9QHaE8&pid=Api&P=0&h=180"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={Style.Namedata}>
                      <label>Email Id :</label>
                      <input type="text" name="Enter Your Email" />
                    </div>
                    <div className={Style.buttondata}>
                      <button>
                        <img
                          src="https://dvf7opio6knc7.cloudfront.net/satyugImages/left-arrow.png"
                          alt="left-arrow"
                        />
                        <span>Submit</span>
                        <img
                          src="https://dvf7opio6knc7.cloudfront.net/satyugImages/right-arrow.png"
                          alt="right-arrow"
                        />
                      </button>
                    </div>
                  </form>
                  <div className={Style.textsec}>
                    <p>*We are GDPR compliant and your data is safe.</p>
                  </div>
                </div>
              </div>
              <div className={Style.vediodata}>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  style={{ width: "100%", objectFit: "cover", height: "100%" }}
                >
                  <source src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/BahumulyaWEBM.webm" />
                </video>
              </div>
              <div className={Style.muteddata}>
                <button onClick={toggleMute}>
                  {isMuted ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-volume-high"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hanumanji;
