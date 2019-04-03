import React, { Component } from "react";
import SlideDrawer from "./components/SlideDrawer/SlideDrawer.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
import "./components/Toolbar/Toolbar.css";
import "./index.css";
import Overlay from "./components/Overlay/Overlay.jsx";
import MovieList from "./components/Movie/Movie_list.jsx";
//import Contact from "./components/Contact/Contact.jsx";
import Form from "./components/NetlifyForm/Form.jsx";
import About from "./components/Home/about.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MovieDetail from "./components/Movie/MovieDetail.jsx";
import rootReducer from "./components/Reducers/rootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

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

    const store = createStore(rootReducer, {}, composeWithDevTools());
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Toolbar drawerClickhandler={this.drawerToggleClickHandler} />
            <SlideDrawer show={this.state.slideDrawerOpen} />
            {overlay}

            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/About" component={About} />
              <Route path="/Form" component={Form} />
              <Route path="/Movielist" component={MovieList} />
              <Route path="/:id" component={MovieDetail} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
