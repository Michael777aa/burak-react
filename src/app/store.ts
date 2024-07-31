import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homepage/slice";

export const store = configureStore({
  reducer: {
    middleware: (getDefaultMiddleware) =>
      // @ts-ignore
      getDefaultMiddleware().concat(ReduxLogger),
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
