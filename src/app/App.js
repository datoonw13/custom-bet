import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, NotFound, Profile } from "../views";
import { ProtectedRoute } from "../components";
import Header from "./Header/Header";
import SideDrower from "./SideDrower/SideDrower";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Content from "./Content/Content";
import Auth from "./Auth/Auth";

function App() {
   const classes = useStyles();
   return (
      <Router>
         <CssBaseline />
         <div className={classes.root}>
            <Header />
            <SideDrower />
            <Content>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <ProtectedRoute path="/profile">
                     <Profile />
                  </ProtectedRoute>
                  <Route path="*" component={NotFound} />
               </Switch>
            </Content>
            <Auth />
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
