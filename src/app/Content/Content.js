import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../../services/UIConstants";

function Content(props) {
   const classes = useStyles();
   return (
      <main
         className={clsx(classes.content, {
            [classes.contentShift]: props.sideDrawerIsVisible,
         })}
      >
         <div className={classes.drawerHeader} />
         {props.children}
      </main>
   );
}

const mapStateToProps = (state) => ({ sideDrawerIsVisible: state.mainReducer.sideDrawerIsVisible });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

const useStyles = makeStyles((theme) => ({
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
   },
   contentShift: {
      transition: theme.transitions.create("margin", {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
   },
   drawerHeader: {
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
   },
}));
