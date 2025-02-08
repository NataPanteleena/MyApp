import { configureStore } from '@reduxjs/toolkit';
import {tasksReducer} from "./tasks/tasksReducer.ts";
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;