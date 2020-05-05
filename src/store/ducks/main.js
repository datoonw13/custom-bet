const TOGGLE_BURGER_DRAWER = "custom-bet/main/toggleBurgerDrower";
export const RESET_STORE = "custom-bet/main/resetStore";

const initialState = {
   burgerDrawerIsVisible: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_BURGER_DRAWER:
         return { ...state, burgerDrawerIsVisible: action.payload };
      default:
         return state;
   }
};

export const toggleBurgerDrower = (visible) => ({
   type: TOGGLE_BURGER_DRAWER,
   payload: visible,
});

export const resetStore = () => ({
   type: RESET_STORE,
});
