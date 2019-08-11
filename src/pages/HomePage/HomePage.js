import React from 'react';
import './HomePage.css';

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
            <img src="../../../src/svg/index1.svg" alt="save with us" />
            <p>Save</p>
          </div>
          <div className="index-image">
            <img src="../../../src/svg/index2.svg" alt="save with us" />
            <p>Investments</p>
          </div>
          <div className="index-image">
            <img src="../../../src/svg/index3.svg" alt="save with us" />
            <p>Secured</p>
          </div>
          <div className="index-image">
            <img src="../../../src/svg/index4.svg" alt="save with us" />
            <p>Every where you go</p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
