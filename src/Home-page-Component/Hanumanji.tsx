import React, { useRef, useState } from "react";
import Style from "./hanumanji.module.scss";

interface IHanumanji {
  ishanumanji: any;
  setIshanumanji: any;
}

const Hanumanji: React.FC<IHanumanji> = ({ ishanumanji, setIshanumanji }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    error: "",
    error1: "",
    error2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data, [e.target.id.toLowerCase()]: e.target.value };
    setData(newData);

    if (e.target.id === "Name") setErrors({ ...errors, error: "" });
    if (e.target.id === "Number") setErrors({ ...errors, error1: "" });
    if (e.target.id === "Email") setErrors({ ...errors, error2: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { error: "", error1: "", error2: "" };

    if (data.name === "") {
      newErrors.error = "Name is required";
      valid = false;
    }
    if (data.number === "") {
      newErrors.error1 = "Whatsapp number is required";
      valid = false;
    }
    if (data.email === "") {
      newErrors.error2 = "Email is required";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) {
      console.log("Form Submitted", data);
    }
  };

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
            src="http://www.clker.com/cliparts/n/F/Z/O/p/7/red-rain-drop-hi.png"
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
            <div className={Style.backbutton}>
              <img
                src="https://dvf7opio6knc7.cloudfront.net/satyugImages/back-icon.png"
                alt=""
              />
              <a href="">Back</a>
            </div>
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
                  <form onSubmit={handleSubmit}>
                    <div className={Style.Namedata}>
                      <label>Name :</label>
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        id="Name"
                        value={data.name}
                      />
                      <br></br>
                      <span className={Style.error}>{errors.error}</span>
                    </div>
                    <div className={Style.Namedata}>
                      <label>Whatsapp :</label>
                      <input
                        type="number"
                        placeholder="+91"
                        id="Number"
                        onChange={handleChange}
                        value={data.number}
                      />
                      <br></br>
                      <span className={Style.error}>{errors.error1}</span>
                    </div>
                    <div className={Style.Namedata}>
                      <label>Email Id :</label>
                      <input
                        type="email"
                        id="Email"
                        placeholder="Example@gmail.com"
                        onChange={handleChange}
                        value={data.email}
                      />
                      <br></br>
                      <span className={Style.error}>{errors.error2}</span>
                    </div>
                    <div className={Style.buttondata}>
                      <button type="submit">
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
                  <source
                    src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/BahumulyaWEBM.webm"
                    type="video/webm"
                  />
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
