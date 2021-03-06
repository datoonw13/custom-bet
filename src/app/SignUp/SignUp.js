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
import { toggleSignIn, toggleSignUp } from "../../store/ducks/main";
import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useForm } from "react-hook-form";

function SignUp(props) {
   const classes = useStyles();
   const { register, errors, formState } = useForm({
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: { email: "", password: "", firstName: "", lastName: "" },
   });

   return (
      <Container component="main" maxWidth="xs" className={classes.container}>
         <CssBaseline />
         <div className={classes.paper}>
            <IconButton color="inherit" aria-label="close" edge="start" className={classes.cancel} onClick={props.closeSignUp}>
               <Cancel />
            </IconButton>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign up
            </Typography>
            <form className={classes.form} noValidate>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        label="First Name"
                        autoFocus
                        inputRef={register({ required: true })}
                        error={!!errors.firstName}
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        inputRef={register({ required: true })}
                        error={!!errors.lastName}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        inputRef={register({ pattern: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, required: true })}
                        error={!!errors.email}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={register({ required: true })}
                        error={!!errors.password}
                        helperText="password must contein ..."
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                     />
                  </Grid>
               </Grid>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!formState.isValid}
               >
                  Sign Up
               </Button>
               <Grid container justify="flex-end">
                  <Grid item>
                     <Link href="#" variant="body2" onClick={props.openSignIn}>
                        Already have an account? Sign in
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
      openSignIn: () => dispatch(toggleSignIn(true)),
      closeSignUp: () => dispatch(toggleSignUp(false)),
   };
};

export default connect(null, mapDispatchToProps)(SignUp);

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
      // [theme.breakpoints.down("sm")]: {
      //    marginTop: theme.spacing(2),
      // },
   },
   avatar: {
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));
