import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { chatReducer } from "./reducers/chatReducer";
import { sessionReducer } from "./reducers/sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  chat: chatReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);