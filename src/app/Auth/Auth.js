import React from "react";
import { connect } from "react-redux";
import { toggleSignUp, toggleSignIn } from "../../store/ducks/main";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { colors } from "@material-ui/core";

function Auth(props) {
   const classes = useStyles();
   const { signInIsOpen, signUpIsOpen } = props;
   const open = signInIsOpen || signUpIsOpen;

   const handleClose = () => {
      if (signUpIsOpen) {
         props.closeSignIn();
      } else {
         props.closeSignUp();
      }
   };
   return (
      <div>
         <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 200,
            }}
         >
            <Fade in={open}>
               <div className={classes.paper}>
                  {signInIsOpen && <SignIn />}
                  {signUpIsOpen && <SignUp />}
               </div>
            </Fade>
         </Modal>
      </div>
   );
}

const mapStateToProps = (state) => ({
   signInIsOpen: state.mainReducer.signInVisible,
   signUpIsOpen: state.mainReducer.signUpVisible,
});

const mapDispatchToProps = (dispatch) => {
   return {
      closeSignIn: () => dispatch(toggleSignIn(false)),
      closeSignUp: () => dispatch(toggleSignUp(false)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const useStyles = makeStyles((theme) => ({
   modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   paper: {
      maxHeight: "600px",
      overflowY: "auto",
      backgroundColor: colors.grey[100],
      boxShadow: theme.shadows[3],
   },
}));
