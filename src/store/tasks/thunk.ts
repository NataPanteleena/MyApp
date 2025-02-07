import {createAsyncThunk} from "@reduxjs/toolkit";
import { TasksData } from './tasksReducer.ts';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async() => {
  const response = await fetch(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks}`);
  await response.json();
  return (await response.json()) as TasksData[];
