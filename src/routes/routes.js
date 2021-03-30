import { BrowserRouter as Router,HashRouter, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/login";
import HomePage from "../pages/homepage";
import Container from "../pages/container";

// defining pages
// container page is used to distinguish between logged in/logged out user
export default function Routes() {
    return (
      <HashRouter basename="/"> 
        <div>
          <Switch>
            <Route path="/home">
              
              <HomePage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Container />
            </Route>
          </Switch>
        </div>
        </HashRouter>
    );
  }