import { configureStore } from "@reduxjs/toolkit";

import addTaskSlice from "./addTaskSlice";

const store = configureStore({
    reducer: {addTask: addTaskSlice.reducer }
})

export default store;