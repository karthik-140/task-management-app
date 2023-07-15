import { createSlice } from "@reduxjs/toolkit";

const fetchTasks = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    return tasks;
  } else {
    return [];
  }
};

const addTaskSlice = createSlice({
  name: "addTask",
  initialState: { taskList: fetchTasks(), displayAddTask: false, editableTask: null, editable:false, filteredTasks: null },
  reducers: {
    addTaskList(state, action) {
      state.taskList = action.payload.add;
    },
    displayAddTaskHandler(state) {
      state.displayAddTask = !state.displayAddTask;
    },
    editable(state){
       state.editable = !state.editable
    },
    editTask(state, action) {
      state.displayAddTask = true;
      let title = action.payload.title;
      const task = state.taskList.find((task) => task.title === title);
      state.editableTask = task;
      state.editable = !state.editable
    },
    deleteTask(state, action) {
      let title = action.payload.title;
      const newList = state.taskList.filter((task) => task.title !== title);
      state.taskList = newList;
      localStorage.setItem("tasks", JSON.stringify(newList));
    },
    filterTasks(state, action){
      let query = action.payload.search;
      state.filteredTasks = state.taskList.filter((task) => {
        return task.title.toLowerCase().includes(query.toLowerCase());
      })
    }
  },
});

export const addTaskActions = addTaskSlice.actions;
export default addTaskSlice;
