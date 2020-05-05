import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText, colors } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { drawerWidth } from "../../services/UIConstants";
import { connect } from "react-redux";
import { toggleSideDrower } from "../../store/ducks/main";
import { Link } from "react-router-dom";

function SideDrower(props) {
   const classes = useStyles();
   const theme = useTheme();

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
                  {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
               </IconButton>
            </div>
            <Divider />
            <List>
               <Link to="/" className={classes.link}>
                  <ListItem button key={"Home"}>
                     <ListItemIcon>
                        <HomeIcon />
                     </ListItemIcon>
                     <ListItemText primary={"Home"} />
                  </ListItem>
               </Link>
               <Link to="/profile" className={classes.link}>
                  <ListItem button key={"profile"}>
                     <ListItemIcon>
                        <AccountCircle />
                     </ListItemIcon>
                     <ListItemText primary={"Profile"} />
                  </ListItem>
               </Link>
            </List>
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

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
   },
   appBar: {
      transition: theme.transitions.create(["margin", "width"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   hide: {
      display: "none",
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
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
   },
   link: {
      textDecoration: "none",
      color: colors.grey[900],
   },
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
}));
