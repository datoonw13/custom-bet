const TOGGLE_SIDE_DRAWER = "custom-bet/main/toggleSideDrower";
export const RESET_STORE = "custom-bet/main/resetStore";

const initialState = {
   sideDrawerIsVisible: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_SIDE_DRAWER:
         return action.payload === undefined
            ? { ...state, sideDrawerIsVisible: !state.sideDrawerIsVisible }
            : { ...state, sideDrawerIsVisible: action.payload };
      default:
         return state;
   }
};

export const toggleSideDrower = (visible) => ({
   type: TOGGLE_SIDE_DRAWER,
   payload: visible,
});

export const resetStore = () => ({
   type: RESET_STORE,
});
