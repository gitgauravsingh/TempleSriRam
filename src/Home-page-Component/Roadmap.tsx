import React from "react";
import Style from "./roadmap.module.scss";

const Roadmap = () => {
  return (
    <div className={Style.roadmapdata}>
      <div className={Style.wrapper}>
        <div className={Style.textbar}>
          <h2>
            <img
              src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png"
              alt=""
            />
            Roadmap to Success
            <img
              src="	https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
              alt=""
            />
          </h2>
        </div>
        <div className={Style.monthdata}>
          <div className={Style.jandata}>
            <h4>January</h4>
            <h3>2024</h3>
            <h5>Launch at the onset of Pran Pratishtha at Ram Mandir</h5>
          </div>
          <div className={Style.jandata}>
            <h4>December</h4>
            <h3>2025</h3>
            <h5>Add Upanishads, Bhagavad Gita and Mahabharata Chapters</h5>
          </div>
        </div>
        <div className={Style.dhanushdata}>
          <img
            src="https://digitalrammandir.com/wp-content/uploads/2023/12/Group-1000003003.png"
            alt=""
          />
        </div>
        <div className={Style.secondmonth}>
          <div className={Style.Decemberdata}>
            <h4>December</h4>
            <h3>2023</h3>
            <h5>The WebPage</h5>
            <p>+ Ready with Phase-1 Ram Mandir activities + assets</p>
          </div>
          <div className={Style.Decemberdata}>
            <h4>April-Dec</h4>
            <h3>2024</h3>
            <h5>Add-ons</h5>
            <p>+ Launch more Religious Stories/Temples + assets</p>
          </div>
          <div className={Style.Decemberdata}>
            <h4>January</h4>
            <h3>2025</h3>
            <h5>Virtual LIVE Religious Tourism Launch</h5>
          </div>
          <div className={Style.Decemberdata}>
            <h4>August</h4>
            <h3>2026</h3>
            <h5>Digital Ram Mandir Network-State Launch</h5>
            <p>+ With Incentives</p>
          </div>
        </div>
        <div className={Style.ourblogs}>
          <div className={Style.imagedata}>
            <div className={Style.mainimg}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed-Ram-Mandir.png"
                alt=""
              />
            </div>
            <div className={Style.textrel}>
              <h2>
                <a href="">
                  Religion Tech- The new disruptor for a Spiritual India
                </a>
              </h2>
            </div>
          </div>
          <div className={Style.blogtext}>
            <div className={Style.bolgview}>
              <h2>Our Blogs</h2>
              <a href="">View All</a>
            </div>
            <div className={Style.mainblog}>
              <div className={Style.imagebar}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed-5.png"
                  alt=""
                />
                <div className={Style.text}>
                  <h2>
                    Reinforcing Devotees’ Connection to Faith and Culture
                    through Digital Realm
                  </h2>
                  <p>Digital Ram Mandir</p>
                </div>
              </div>
              <div className={Style.imagebar}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed.jpg"
                  alt=""
                />
                <div className={Style.text}>
                  <h2>
                    The Architectural Masterpiece of Shri Ram Janmbhoomi Mandir
                    Unveiled
                  </h2>
                  <p>Digital Ram Mandir</p>
                </div>
              </div>
              <div className={Style.imagebar}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/01/unnamed-35.png"
                  alt=""
                />
                <div className={Style.text}>
                  <h2>
                    How the Construction of Ram Mandir Shape India’s Economic
                    Trajectory?
                  </h2>
                  <p>Digital Ram Mandir</p>
                </div>
              </div>
              <div className={Style.imagebar}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/01/unnamed-34.png"
                  alt=""
                />
                <div className={Style.text}>
                  <h2>Ram Mandir’s Virtual Excellence vs YouTube Boundaries</h2>
                  <p>Uncategorized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
