import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Shop from "./components/Shop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
          <Route path="/signout" component={Signup} />
        </Switch>
      </Router>
    </main>
  );
}
export default App;
