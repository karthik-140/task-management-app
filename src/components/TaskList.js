import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";

const TaskList = () => {
  const { taskList, filteredTasks } = useSelector((state) => state.addTask);

  const addedTasks = taskList.map((task) => {
    return (
      <Task
        title={task.title}
        date={task.date}
        description={task.description}
        key={Math.random()}
      />
    );
  });

  return (
    <>
    {!filteredTasks && addedTasks }
    {filteredTasks && filteredTasks.map((task) => {
    return (
      <Task
        title={task.title}
        date={task.date}
        description={task.description}
        key={Math.random()}
      />
    );
  })}
    </>
  );
};

export default TaskList;
