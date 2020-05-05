import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { drawerWidth } from "../../services/UIConstants";
import clsx from "clsx";
import { AppBar, IconButton, Button, Menu, MenuItem, Toolbar, Typography, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { toggleSideDrower } from "../../store/ducks/main";

function Header(props) {
   const history = useHistory();
   const classes = useStyles();
   const [auth, setAuth] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleLogOut = () => {
      history.push("/");
   };

   const navigateProfile = () => {
      history.push("/profile");
   };

   const { drawerIsOpen } = props;

   return (
      <AppBar
         position="fixed"
         className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerIsOpen,
         })}
      >
         <Toolbar>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={props.openDrawer}
               edge="start"
               className={clsx(classes.menuButton, drawerIsOpen && classes.hide)}
            >
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
               Custom Bet
            </Typography>
            {auth ? (
               <div>
                  <IconButton
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleMenu}
                     color="inherit"
                  >
                     <AccountCircle />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={open}
                     onClose={handleClose}
                  >
                     <MenuItem onClick={navigateProfile}>Profile</MenuItem>
                     <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                  </Menu>
               </div>
            ) : (
               <div>
                  <Button color="inherit">Sign in</Button>
                  <Button color="inherit">Get started</Button>
               </div>
            )}
         </Toolbar>
      </AppBar>
   );
}

const mapStateToProps = (state) => ({ drawerIsOpen: state.mainReducer.sideDrawerIsVisible });
const mapDispatchToProps = (dispatch) => {
   return {
      openDrawer: () => dispatch(toggleSideDrower(true)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const useStyles = makeStyles((theme) => ({
   title: {
      flexGrow: 1,
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
}));
