import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + action.value,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - action.value,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
