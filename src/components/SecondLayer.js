import React from "react";
import "../styles/SecondLayer.css";

import { Line } from "rc-progress";
import MixedChart from "./MixedChart";
import newimage from "../assets/newimage.png";

function SecondLayer() {
  return (
    <div className="secondLayer">
      {/* LEFT BOX */}
      <div className="leftBox">
        <div className="sales">
          <div className="salesAnalytics">Sales Analytics</div>
          <div className="sortAnalytics">
            <span>Sort By:</span>{" "}
          </div>
          <div className="spanAnalytics">Yearly</div>
          <div className="faIcon">
            <i class="far fa-chevron-down"></i>
          </div>
        </div>
        <div className="incomeSalesRatio">
          <div className="income">
            <b className="incomeSpan">$2,371</b> Income
          </div>
          <div className="sales">
            <b className="salesSpan">258</b> Sales
          </div>
          <div className="ratio">
            <b className="ratioSpan">3.6%</b> Conversation Ratio
          </div>
        </div>
        <div className="chart">
          <MixedChart />
        </div>
      </div>

      {/* RIGHT BOXES */}
      <div className="rightBoxes">
        {/* TOP RIGHT BOX */}

        <div className="topRightBox">
          <p className="campaignText">
            Enhance your <b>Campaign</b> for better <span>outreach</span>
            <div className="campaignIcon">
              <i class="far fa-arrow-right"></i>
            </div>
          </p>
          <button className="campaignButton">Upgrade Account!</button>
          <img src={newimage} alt="img" />
        </div>

        {/* BOTTOM RIGHT BOX */}
        <div className="bottomRightBox">
          <div className="topSelling"> Top Selling Products</div>
          <div className="sortSelling">
            Sort By: <span className="sortYearly">Yearly</span>
            <div className="bottomRightIcon">
              <i class="far fa-chevron-down"></i>
            </div>
          </div>

          {/* PROGRESS BARS */}

          <div className="progressBar">
            <div className="desktops">
              <span className="desktopItem">•</span> Desktops
              <Line
                className="progress"
                percent="55"
                strokeWidth="1.5"
                strokeColor="#7588e6"
              />
            </div>

            <div className="iPhones">
              <span className="iPhoneItem">•</span> iPhones
              <Line
                className="progress"
                percent="45"
                strokeWidth="1.5"
                strokeColor="#67b2e0"
              />
            </div>

            <div className="android">
              <span className="androidItem">•</span> Android
              <Line
                className="progress"
                percent="50"
                strokeWidth="1.5"
                strokeColor="#63dbb1"
              />
            </div>

            <div className="tablets">
              <span className="tabletItem">•</span> Tablets
              <Line
                className="progress"
                percent="75"
                strokeWidth="1.5"
                strokeColor="#de3a7b"
              />
            </div>

            <div className="cables">
              <span className="cableItem">•</span> Cables
              <Line
                className="progress"
                percent="60"
                strokeWidth="1.5"
                strokeColor="#8f5ead"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondLayer;
