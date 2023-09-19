import { createStore, combineReducers } from "redux";
import { albumReducer } from "./albumReducer";
import { postReducer } from "./postReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
   posts: postReducer,
   albums: albumReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
