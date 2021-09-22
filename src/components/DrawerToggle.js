import React from "react";
import '../styles/DrawerToggle.css';

const drawerToggleButton = (props) => (
  <button className="toggleButton" onClick={props.clickMenu}>
    <div className='openButton'> 
      <i class="far fa-bars"></i>
    </div>
  </button>
);
export default drawerToggleButton;




