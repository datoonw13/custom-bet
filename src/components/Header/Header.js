import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { IconButton, Menu, MenuItem, Toolbar, Typography, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

function Header() {
   const history = useHistory();
   const classes = useStyles();
   const [auth, setAuth] = React.useState(true);
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

   return (
      <header>
         <AppBar position="static">
            <Toolbar>
               <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  Custom Bet
               </Typography>
               {auth && (
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
                           horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right"
                        }}
                        open={open}
                        onClose={handleClose}
                     >
                        <MenuItem onClick={navigateProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                     </Menu>
                  </div>
               )}
            </Toolbar>
         </AppBar>
      </header>
   );
}

export default Header;

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1
   },
   menuButton: {
      marginRight: theme.spacing(2)
   },
   title: {
      flexGrow: 1
   }
}));
