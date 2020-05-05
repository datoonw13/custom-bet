import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, NotFound, Profile } from "../views";
import { ProtectedRoute } from "../components";
import Header from "./Header/Header";
import SideDrower from "./SideDrower/SideDrower";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Content from "./Content/Content";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

function App() {
   const classes = useStyles();
   return (
      <Router>
         <CssBaseline />
         <div className={classes.root}>
            <Header />
            <SideDrower></SideDrower>
            <Content>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <ProtectedRoute path="/profile">
                     <Profile />
                  </ProtectedRoute>
                  <Route path="*" component={NotFound} />
               </Switch>
            </Content>
            <SignIn />
            <SignUp />
         </div>
      </Router>
   );
}

export default App;

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
   },
}));
