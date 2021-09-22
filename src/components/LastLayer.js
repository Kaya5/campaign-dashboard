import React from "react";

import '../styles/LastLayer.css';

function LastLayer() { 
  return (
    <div className="container">
      <div className="firstRectangle">
        <div className="leftAlign">Top Users</div>
        <span className="spanRight">All Members </span>
        <div className='expand'><i class="far fa-chevron-down"></i></div>
      </div>

      <div className="secondRectangle">
        <div className="leftAlign">Recent Activity</div>
        <span className="spanRight">Recent </span>
        <div className='expand'><i class="far fa-chevron-down"></i></div>
      </div>
      <div className="lastRectangle">
        <div className="leftAlign">Social Source</div>
        <span className="spanRight">Monthly </span>
        <div className='expand'><i class="far fa-chevron-down"></i></div>
      </div>
    </div>
  );
}

export default LastLayer;
