import React from "react";
import "../styles/FirstLayer.css";
import { Circle } from "rc-progress";

function FirstLayer() {
  return (
    <div>
      <div className="rectangleContainer">
        <div className="rectangle">
          <h3 className="amount">$34,152</h3>

          <p className="categoryI">Total Revenue</p>
          <div
            container
            direction="row"
            alignItems="center"
            className="miniChartIconBlue"
          >
            <i class="fal fa-chart-bar"></i>
          </div>
          <p className="rate">
            <span className="increase">⬆2.65%</span> since last week
          </p>
        </div>

        <div className="rectangle">
          <h3 className="amount">5,643</h3>
          <p className="category">
            Orders{" "}
            <Circle
              className="orderProgress"
              percent="70"
              strokeWidth="13"
              strokeColor="#0b9e8f"
            />
          </p>
          <p className="rate">
            <span className="decrease">⬇0.82%</span> since last week
          </p>
        </div>

        <div className="rectangle">
          <h3 className="amount">45,254</h3>
          <p className="category">
            Customers{" "}
            <Circle
              className="orderProgressBlue"
              percent="50"
              strokeWidth="13"
              strokeColor="blue"
            />
          </p>
          <p className="rate">
            <span className="decrease">⬇6.24%</span> since last week
          </p>
        </div>
 
        <div className="rectangle">
          <h3 className="amount">+ 12.58%</h3>
          <p className="categoryI">Growth</p>
          <div
            container
            direction="row"
            alignItems="center"
            className="miniChartIconYellow"
          >
            <i class="fal fa-chart-bar"></i>
          </div>
          <p className="rate">
            <span className="increase">⬆10.51%</span> since last week
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default FirstLayer;
