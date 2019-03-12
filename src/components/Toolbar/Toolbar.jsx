import React from "react";
import DrawerToggleButton from "../SlideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickhandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">
          <img src={require("./logo_small.png")} alt="logo" />
        </a>
        <p>Spicer's Spot</p>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
