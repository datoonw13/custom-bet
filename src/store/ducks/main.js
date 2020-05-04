const TOGGLE_BURGER_DRAWER = "custom-bet/main/toggleBurgerDrower";

const initialState = {
   burgerDrawerIsOpen: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_BURGER_DRAWER:
         return { ...state, burgerDrawerIsOpen: action.payload };
      default:
         return state;
   }
};

export const toggleBurgerDrower = (status) => ({
   type: TOGGLE_BURGER_DRAWER,
   payload: status,
});
