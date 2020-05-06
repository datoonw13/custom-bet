const TOGGLE_SIDE_DRAWER = "custom-bet/main/toggleSideDrower";
const TOGGLE_SIGN_IN = "custom-bet/main/toggleSignIn";
const TOGGLE_SIGN_UP = "custom-bet/main/toggleSignUp";
export const RESET_STORE = "custom-bet/main/resetStore";

const initialState = {
   sideDrawerIsVisible: false,
   signInVisible: false,
   signUpVisible: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_SIDE_DRAWER:
         return action.payload === undefined
            ? { ...state, sideDrawerIsVisible: !state.sideDrawerIsVisible }
            : { ...state, sideDrawerIsVisible: action.payload };
      case TOGGLE_SIGN_IN:
         return {
            ...state,
            signInVisible: action.payload === undefined ? !state.signInVisible : action.payload,
            signUpVisible: false,
         };
      case TOGGLE_SIGN_UP:
         return {
            ...state,
            signUpVisible: action.payload === undefined ? !state.signUpVisible : action.payload,
            signInVisible: false,
         };
      default:
         return state;
   }
};

export const toggleSideDrower = (visible) => ({
   type: TOGGLE_SIDE_DRAWER,
   payload: visible,
});

export const toggleSignIn = (visible) => ({
   type: TOGGLE_SIGN_IN,
   payload: visible,
});

export const toggleSignUp = (visible) => ({
   type: TOGGLE_SIGN_UP,
   payload: visible,
});

export const resetStore = () => ({
   type: RESET_STORE,
});
