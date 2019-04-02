import React, { Component } from "react";
import SlideDrawer from "./components/SlideDrawer/SlideDrawer.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
import "./components/Toolbar/Toolbar.css";
import "./index.css";
import Overlay from "./components/Overlay/Overlay.jsx";
import MovieList from "./components/Movie/Movie_list.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/Home/about.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/Movie/MovieDetail.jsx";

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
      <Router>
        <div className="App">
          <Toolbar drawerClickhandler={this.drawerToggleClickHandler} />
          <SlideDrawer show={this.state.slideDrawerOpen} />
          {overlay}

          <Switch>
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Movielist" component={MovieList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
