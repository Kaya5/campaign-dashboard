import React from 'react';
import DrawerToggle from '../components/DrawerToggle';
import kaya from '../assets/kaya.png';
import '../styles/Toolbar.css';

const Toolbar = (props) => (
  <header className="toolbar"> 
    <nav className="toolbarNav">
      <div className="drawerToggle">
        <DrawerToggle clickMenu={props.drawerToggle}/>
      </div>
      <div className="toolbarItem">
        <div className="flag">🇳🇬</div>
        <div className="rightIcons">
          <i class="fad fa-th-large"></i>
        </div>
        <div className="rightIcons">
          <i class="far fa-copy"></i>
        </div>
        <div className="rightIcons">
          <i class="far fa-bell"></i>
        </div>
        <button className="notification">3</button>
          <img src={kaya} alt="kay" className="avatar" />
        <div className="Kay">Kunmilade</div>
        <div className="chevronDown">
          <i class="far fa-chevron-down"></i>
        </div>
        <div className="rightIcons">
          <i class="far fa-cog"></i>
        </div>
      </div>
    </nav>
  </header>
);

export default Toolbar;