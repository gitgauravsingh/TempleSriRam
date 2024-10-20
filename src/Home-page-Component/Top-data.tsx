import React, { useState } from "react";
import Style from "./topdata.module.scss";
import Overlay from "./Overlay";
import Banner from "./Banner";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Footer from "./Footer";

const Topdata = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showdata, setShowdata] = useState(true);

  const handleClick = () => {
    setOverlayVisible(true);
    setShowdata(false);
  };

  return (
    <>
      {showdata && (
        <>
          <div className={Style.topdata}>
            <div className={Style.wrapper}>
              <div className={Style.middleimg}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/banner_logo.png"
                  alt="Banner"
                />
              </div>
              <div className={Style.textdata}>
                <h1>Digital Ram Mandir</h1>
                <div className={Style.textbar}>
                  <h3>
                    If you have not been able to go to Ayodhya yet, then let us
                    together build a digital temple of Lord Shri Ram and have
                    darshan of Ram Lala while sitting at home.
                  </h3>
                </div>
                <div className={Style.button} onClick={handleClick}>
                  <a href="#">Enter Mandir</a>
                </div>
              </div>
            </div>
          </div>
          <Banner />
          <Roadmap />
          <Faq />
          <Footer />
        </>
      )}
      <Overlay data={overlayVisible} setData={setOverlayVisible} />
    </>
  );
};

export default Topdata;
