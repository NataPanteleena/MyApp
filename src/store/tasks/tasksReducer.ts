import { createSlice} from '@reduxjs/toolkit';
import {fetchTasks} from "./thunk.ts";

export interface TasksData {
  id: number;
  text: string;
  category: string;
  priority: boolean;
  completed: boolean;
  userId: number;
}

interface TasksState {
  data: TasksData[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch';
      });
  },
});

export const tasksReducer = userSlice.reducer;
