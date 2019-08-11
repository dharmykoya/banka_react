import React from 'react';
import './HomePage.css';
import Image1 from '../../../public/assets/svg/index1.svg';
import Image2 from '../../../public/assets/svg/index2.svg';
import Image3 from '../../../public/assets/svg/index3.svg';
import Image4 from '../../../public/assets/svg/index4.svg';

const HomePage = () => (
  <div>
    <main>
      <div className="index-container">
        <div className="index-text-container">
          <h2 className="index-text-1">Your safest Online Bank</h2>
          <h4 className="index-text-2">
            Where we make dreams bigger and achievable.
          </h4>
          <h5 className="index-text-3">Bank with Us Today.</h5>
        </div>
        <div className="index-text-images">
          <div className="index-image">
            <img src={Image1} alt="save with us" />
            <p>Save</p>
          </div>
          <div className="index-image">
            <img src={Image2} alt="Investments" />
            <p>Investments</p>
          </div>
          <div className="index-image">
            <img src={Image3} alt="Secured" />
            <p>Secured</p>
          </div>
          <div className="index-image">
            <img src={Image4} alt="Every where you go" />
            <p>Every where you go</p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
