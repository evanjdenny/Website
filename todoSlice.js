import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        task: action.payload.task,
        completed: false,
        date: action.payload.date,
        time: action.payload.time,
      });
    },
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
    toggleCompleted: (state, action) => {
      state.tasks[action.payload].completed =
        !state.tasks[action.payload].completed;
    },
    setDue: (state, action) => {
      state.tasks[action.payload.index].due = action.payload.due;
    },
    setTaskText: (state, action) => {
      state.tasks[action.payload.index].task = action.payload.text;
    },
  },
});

export const { addTask, removeTask, toggleCompleted, setDue, setTaskText } =
  todoSlice.actions;
export default todoSlice.reducer;
