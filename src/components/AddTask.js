import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTaskActions } from "../store/addTaskSlice";
import Card from "../UI/card";

const AddTask = () => {
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const descriptionRef = useRef(null);
  const dispatch = useDispatch();
  const { taskList, editableTask, editable } = useSelector((state) => state.addTask);

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const date = dateRef.current.value;
    const description = descriptionRef.current.value;
    const obj = { title, date, description };
    if (editableTask && editable) {
      let title = editableTask.title;
      let idx = taskList.findIndex((task) => task.title === title);
      console.log(idx);
      const newList = [...taskList];
      newList[idx] = obj;
      localStorage.setItem("tasks", JSON.stringify([...newList]));
      dispatch(addTaskActions.addTaskList({ add: [...newList] }));
    } else {
      dispatch(addTaskActions.addTaskList({ add: [...taskList, obj] }));
      localStorage.setItem("tasks", JSON.stringify([...taskList, obj]));
    }
    titleRef.current.value = "";
    dateRef.current.value = "";
    descriptionRef.current.value = "";
    dispatch(addTaskActions.displayAddTaskHandler());
    dispatch(addTaskActions.editable())
    dispatch(addTaskActions.filterTasks({search: ""}));
  };

  useEffect(() => {
    if (editableTask && editable) {
      titleRef.current.value = editableTask.title;
      dateRef.current.value = editableTask.date;
      descriptionRef.current.value = editableTask.description;
    }
  }, [editableTask, editable]);

  return (
    <Card>
      <section className="flex flex-col gap-4">
        <h1 className="font-bold ">
          Add New Task
          <hr />
        </h1>
        <form className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-3 w-[100%]">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="rounded p-2 outline-none"
                ref={titleRef}
              />
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="rounded  p-2 outline-none"
                ref={dateRef}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="rounded pb-20 p-2 outline-none"
              ref={descriptionRef}
            />
          </div>
          <button
            onClick={submitHandler}
            className="flex float-left bg-blue-600 px-4 py-1 text-white rounded-xl w-fit"
          >
            Add Task
          </button>
        </form>
      </section>
    </Card>
  );
};

export default AddTask;
