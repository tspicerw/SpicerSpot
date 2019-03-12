import React from "react";
import "./slideDrawer.css";

const slideDrawer = props => {
  let drawerClasses = ["slide-drawer"];
  if (props.show === true) {
    console.log(props.show);
    drawerClasses = ["slide-drawer open"];
  }
  return (
    <nav className={drawerClasses}>
      <header>
        <h1>Social Media</h1>
      </header>
      <ul>
        <li>
          <a href="/">Twitch</a>
        </li>
        <li>
          <a href="/">LinkedIn</a>
        </li>
        <li>
          <a href="/">Facebook</a>
        </li>
      </ul>
    </nav>
  );
};

export default slideDrawer;
