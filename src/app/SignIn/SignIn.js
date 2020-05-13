import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { toggleSignUp, toggleSignIn } from "../../store/ducks/main";
import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useForm } from "react-hook-form";

function SignIn(props) {
   const classes = useStyles();
   const { register, errors, formState } = useForm({
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: { email: "", password: "" },
   });

   console.log(errors.email, errors.password);
   return (
      <Container component="main" maxWidth="xs" className={classes.container}>
         <CssBaseline />
         <div className={classes.paper}>
            <IconButton color="inherit" aria-label="close" edge="start" className={classes.cancel} onClick={props.closeSignIn}>
               <Cancel />
            </IconButton>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
            <form className={classes.form}>
               <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  name="email"
                  required
                  autoComplete="email"
                  autoFocus
                  inputRef={register({ pattern: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, required: true })}
                  error={!!errors.email}
               />
               <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  required
                  autoComplete="current-password"
                  inputRef={register({ required: true })}
                  error={!!errors.password}
               />
               <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!formState.isValid}
               >
                  Sign In
               </Button>
               <Grid container>
                  <Grid item xs>
                     <Link href="#" variant="body2">
                        Forgot password?
                     </Link>
                  </Grid>
                  <Grid item>
                     <Link href="#" variant="body2" onClick={props.openSignUp}>
                        {"Don't have an account? Sign Up"}
                     </Link>
                  </Grid>
               </Grid>
            </form>
         </div>
      </Container>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      openSignUp: () => dispatch(toggleSignUp(true)),
      closeSignIn: () => dispatch(toggleSignIn(false)),
   };
};

export default connect(null, mapDispatchToProps)(SignIn);

const useStyles = makeStyles((theme) => ({
   paper: {
      marginBottom: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   cancel: {
      alignSelf: "flex-end",
      marginRight: theme.spacing(-2),
   },
   avatar: {
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));
