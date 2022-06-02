import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./features/blogSlice";
import loggingReducer from "./features/loggingSlice";


export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        logging: loggingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>