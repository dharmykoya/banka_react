import React from "react";
import "./HomePage.css";
import SVG from "react-inlinesvg";
import Image1 from "../../../public/assets/index1.svg";
import Image2 from "../../../public/assets/index2.svg";
import Image3 from "../../../public/assets/land.svg";

const HomePage = () => {
  return (
    <div>
      {/* <Image1 />
      <Image3 />

      <SVG
        src="../../../public/assets/land.svg"
        preloader={<Loader />}
        onLoad={src => {
          myOnLoadHandler(src);
        }} */}
      />
      <main>
        <div className="index-container">
          <div className="index-text-container">
            <h2 className="index-text-1">Your safest Online Bank</h2>
            <h4 className="index-text-2">
              Where we make dreams bigger and achievable.
            </h4>
            <h5 className="index-text-3">Bank with Us Today.</h5>
            <div className="demo-container">
              <a className="demo-button" href="adminDashboard.html">
                Admin
              </a>
              <a className="demo-button" href="staffDashboard.html">
                Staff
              </a>
            </div>
          </div>
          <div className="index-text-images">
            <div className="index-image">
              <img src="./img/index1.svg" alt="save with us" />
              <p>Save</p>
            </div>
            <div className="index-image">
              <img src={Image1} alt="save with us" />
              <p>Investments</p>
            </div>
            <div className="index-image">
              {/* <img src="./img/index3.svg" alt="save with us" /> */}
              <img src={PicA} alt="save with us" />
              <p>Secured</p>
            </div>
            <div className="index-image">
              <img src="./img/index4.svg" alt="save with us" />
              <p>Every where you go</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
