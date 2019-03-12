import React, { Component } from "react";
import SlideDrawer from "./components/SlideDrawer/SlideDrawer.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
import "./components/Toolbar/Toolbar.css";
import "./index.css";
import Overlay from "./components/Overlay/Overlay.jsx";

class App extends Component {
  state = {
    slideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { slideDrawerOpen: !prevState.slideDrawerOpen };
    });
  };

  overlayClickHandler = () => {
    this.setState({ slideDrawerOpen: false });
  };

  render() {
    let overlay;

    if (this.state.slideDrawerOpen) {
      overlay = <Overlay click={this.overlayClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickhandler={this.drawerToggleClickHandler} />
        <SlideDrawer show={this.state.slideDrawerOpen} />
        {overlay}
        <main className="mainBody">
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
