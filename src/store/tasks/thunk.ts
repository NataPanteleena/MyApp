import {createAsyncThunk} from "@reduxjs/toolkit";
import { ITask } from './tasksReducer.ts';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async(userId:number) => {
  const response = await fetch(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks?userId=${userId}`);
  return (await response.json()) as ITask[];
});