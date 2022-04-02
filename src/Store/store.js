import { configureStore } from "@reduxjs/toolkit";
import rooteReducer from "./rooteReducer";

const store = configureStore({
  reducer: rooteReducer,
});

if (process.env.NODE_ENV === "development" && (module).hot) {
  (module).hot.accept("./rooteReducer", () => {
    const newrooteReducer = require("./rooteReducer").default;
    store.replaceReducer(newrooteReducer);
  });
}

// export type AppDispatch = typeof store.dispatch;

export default store;
