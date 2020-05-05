import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { mainReducer } from "./ducks";
import { RESET_STORE } from "./ducks/main";

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
   mainReducer
});

const rootReducer = (state, action) => {
   if (action.type === RESET_STORE) {
      state = undefined;
   }

   return appReducer(state, action);
};

export default function configureStore(preloadedState) {
   const middlewares = [sagaMiddleware];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [middlewareEnhancer];
   const composedEnhancers = compose(...enhancers);

   const store = createStore(rootReducer, preloadedState, composedEnhancers);

   if (process.env.NODE_ENV !== "production" && module.hot) {
      module.hot.accept("./ducks", () => store.replaceReducer(rootReducer));
   }
   return store;
}
