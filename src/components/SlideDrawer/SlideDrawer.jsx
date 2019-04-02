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
          <a href="https://www.twitch.tv/ncg_terry2989">Twitch</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/terrence-spicer-williams-250570ba/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100004520295992">
            Facebook
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default slideDrawer;
