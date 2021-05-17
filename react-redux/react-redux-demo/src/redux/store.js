import { createStore, combineReducers, compose } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import { counterReducer } from "./counter/counterReducer";

import iceCreamReducer from "./icecream/icecreamReducer";
const rootReducer = combineReducers({
  // যখন আমাদের এপ্লিকেশন এ একাধিক Reducer থাকবে তখন combineReducers ব্যবহার হয়.সব এপ্লিকেশন একবারে পাস করার জন্যে 
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  counter: counterReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// redux dev tools কনফিফারেশন কওরা হয় এভাবে
const store = createStore(
  // createStore ব্যবহার করা হয় reducer ক্রিয়েট করে react এপ্লিকেশন এ সেট করার জন্য 
  rootReducer,

  composeEnhancers()
);

export default store;
