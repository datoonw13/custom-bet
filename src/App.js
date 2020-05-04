import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, NotFound, Profile } from "./views";
import { Header, ProtectedRoute } from "./components";

function App() {
   return (
      <Router>
         <Header></Header>
         <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/profile">
               <Profile></Profile>
            </ProtectedRoute>
            <Route path="*" component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
