import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { applyMiddleware, compose } from "redux";
// import authReducer from "./reducers/authReducer";
// import cartReducer from "./reducers/cartReducer";
// import productsReducer from "./reducers/productsReducer";

// // Middleware and enhancers configuration
// const middleware = [thunk];
// const enhancers = [];

// if (process.env.NODE_ENV === "development") {
//   const { composeWithDevTools } = require("redux-devtools-extension");
//   const devToolsEnhancer = composeWithDevTools({ trace: true, traceLimit: 25 });
//   enhancers.push(devToolsEnhancer(applyMiddleware(...middleware)));
// } else {
//   enhancers.push(applyMiddleware(...middleware));
// }

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//     products: productsReducer,
//   },
//   enhancers,
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import authReducer from "./reducers/authReducer";
// import cartReducer from "./reducers/cartReducer";
// import productsReducer from "./reducers/productsReducer";

// const middleware = [thunk];

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//     products: productsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middleware),
//   enhancers: (defaultEnhancers) => [
//     ...defaultEnhancers,
//     process.env.NODE_ENV === "development" ? composeWithDevTools() : (f) => f,
//   ],
// });

// export default store;
