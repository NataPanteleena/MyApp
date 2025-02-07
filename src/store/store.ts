import { configureStore } from '@reduxjs/toolkit';
import {tasksReducer} from "./tasks/tasksReducer.ts";

const store = configureStore({
  reducer: {
    user: tasksReducer,
  },
});

export default store;
