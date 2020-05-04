import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, NotFound, Profile } from "../views";
import { Header, ProtectedRoute } from "../components";

function App() {
   return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/profile">
               <Profile />
            </ProtectedRoute>
            <Route path="*" component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
