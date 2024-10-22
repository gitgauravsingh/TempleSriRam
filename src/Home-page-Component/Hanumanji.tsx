import React, { useRef, useState } from "react";
import Style from "./hanumanji.module.scss";

interface IHanumanji {
  ishanumanji: any;
  setIshanumanji: any;
}

const Hanumanji: React.FC<IHanumanji> = ({ ishanumanji, setIshanumanji }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    whatsapp?: string;
    email?: string;
  }>({});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.whatsapp) {
      newErrors.whatsapp = "Whatsapp number is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully", formData);
    }
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
                        name="name"
                        onChange={handleChange}
                        required
                        style={{ borderColor: errors.name ? "red" : "initial" }}
                      />
                      {errors.name && (
                        <span style={{ color: "red" }}>{errors.name}</span>
                      )}
                    </div>
                    <div className={Style.Namedata}>
                      <label>Whatsapp :</label>
                      <input
                        type="text"
                        name="whatsapp"
                        onChange={handleChange}
                        required
                        style={{
                          borderColor: errors.whatsapp ? "red" : "initial",
                        }}
                      />
                      {errors.whatsapp && (
                        <span style={{ color: "red" }}>{errors.whatsapp}</span>
                      )}
                    </div>
                    <div className={Style.Namedata}>
                      <label>Email Id :</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        required
                        style={{
                          borderColor: errors.email ? "red" : "initial",
                        }}
                      />
                      {errors.email && (
                        <span style={{ color: "red" }}>{errors.email}</span>
                      )}
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
