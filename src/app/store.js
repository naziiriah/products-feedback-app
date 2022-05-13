import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../features/feedback";
import authReducer from "../features/auth";
export default configureStore({
    reducer:{
        feedback : feedbackReducer,
        auth: authReducer,
    }
})

