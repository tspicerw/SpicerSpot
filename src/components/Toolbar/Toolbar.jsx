import React from "react";
import DrawerToggleButton from "../SlideDrawer/DrawerToggleButton";
import logo from "./logo_small.png";
import "./Toolbar.css";
import { Link } from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickhandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/About">
          <img src={logo} alt="logo" />
        </a>
        <p>Spicer's Spot</p>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/About">Home</Link>
          </li>
          <li>
            <Link to="/Movielist">Movies</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
