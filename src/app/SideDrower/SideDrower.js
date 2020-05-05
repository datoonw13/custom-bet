import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText, colors } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { drawerWidth } from "../../services/UIConstants";
import { connect } from "react-redux";
import { toggleSideDrower } from "../../store/ducks/main";
import { Link, useLocation } from "react-router-dom";

function SideDrower(props) {
   const classes = useStyles();
   const { pathname } = useLocation();

   const Routes = [
      { route: "", icon: HomeIcon },
      { route: "profile", icon: AccountCircle },
   ].map((item, index) => {
      const { route } = item;
      return (
         <Link to={route} className={classes.link} key={index}>
            <ListItem button color="red" selected={`/${route}` === pathname}>
               <ListItemIcon>
                  <item.icon />
               </ListItemIcon>
               <ListItemText primary={capitalize(route ? route : "home")} />
            </ListItem>
         </Link>
      );
   });

   const { drawerIsOpen } = props;

   return (
      <div className={classes.root}>
         <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={drawerIsOpen}
            classes={{
               paper: classes.drawerPaper,
            }}
         >
            <div className={classes.drawerHeader}>
               <IconButton onClick={props.closeDrawer}>
                  <ChevronLeftIcon />
               </IconButton>
            </div>
            <Divider />
            <List>{Routes}</List>
         </Drawer>
      </div>
   );
}

const mapStateToProps = (state) => ({ drawerIsOpen: state.mainReducer.sideDrawerIsVisible });
const mapDispatchToProps = (dispatch) => {
   return {
      closeDrawer: () => dispatch(toggleSideDrower(false)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrower);

const capitalize = (s) => {
   if (typeof s !== "string") return "";
   return s.charAt(0).toUpperCase() + s.slice(1);
};

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
   },
   drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
   },
   link: {
      textDecoration: "none",
      color: colors.grey[900],
   },
}));
