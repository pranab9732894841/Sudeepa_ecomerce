import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About";
import { Container, Menu } from "semantic-ui-react";
import "./root.css";

function App() {
  return (
    <BrowserRouter>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Link to="/">Covid Tracker</Link>
          </Menu.Item>
          <Menu.Item as="a" herf="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Container>
      </Menu>
      <div className="contener">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
