import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import FirstLayer from "./components/FirstLayer";
import SecondLayer from "./components/SecondLayer";
import LastLayer from "./components/LastLayer";
import Dashboard from "./components/Dashboard";

import "./styles/App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

const clickDrawerClose = () => {
  setDrawerOpen(false); 
};

  let sideDrawer;
  if (drawerOpen) {
    sideDrawer = <SideDrawer closeMenu={clickDrawerClose}/>;
  }
  

  return (
    <div className="App">
      <Toolbar drawerToggle={toggleDrawerOpen} />
      {sideDrawer}
      {/* <Backdrop/> */}
      <main>
        <Dashboard />
        <FirstLayer />
        <SecondLayer />
        <LastLayer />
      </main>
    </div>
  );
}

export default App;
