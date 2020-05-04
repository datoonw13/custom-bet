import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";

import { mainReducer } from "./ducks";

const rootReducer = combineReducers({
   mainReducer,
});

export default function configureStore(preloadedState) {
   const middlewares = [loggerMiddleware, thunkMiddleware];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
   const composedEnhancers = compose(...enhancers);

   const store = createStore(rootReducer, preloadedState, composedEnhancers);

   if (process.env.NODE_ENV !== "production" && module.hot) {
      module.hot.accept("./ducks", () => store.replaceReducer(rootReducer));
   }
   return store;
}
