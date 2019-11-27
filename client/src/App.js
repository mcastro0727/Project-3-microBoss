import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import SignUpCreds from "./pages/SignUpCreds";
// import Nav from "./components/Nav";
function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Signup />
      <Login />
      {/* <SignUpCreds /> */}
      {/* <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/signUp" component={SignUpCreds} />
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
