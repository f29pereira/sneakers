import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  cart: cartReducer,
});

/**
 * Redux store
 */
export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
