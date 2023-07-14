import {MdOutlinePostAdd} from "react-icons/md"
import { useSelector, useDispatch } from "react-redux";
import { addTaskActions } from "../store/addTaskSlice";

import Card from "../UI/card";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

const Tasks = () => {
    const dispatch = useDispatch();
    const {displayAddTask} = useSelector((state) => state.addTask);

    const addTaskHandler = () =>{
        dispatch(addTaskActions.displayAddTaskHandler());
    }
    console.log(displayAddTask);
  return (
    <>
    {displayAddTask && <AddTask />}
    <Card>
      <header className="flex justify-around mb-3 ">
        <h1 className="font-bold">Task Management</h1>
        <button onClick={addTaskHandler} className="bg-blue-600 px-4 py-1 text-white rounded-xl w-fit flex gap-2 items-center"><MdOutlinePostAdd />Add New Task</button>
      </header>
      <hr/>
      <table className="table-auto w-[100%]">
        <thead>
          <tr className="font-bold">
            <td>Date</td>
            <td>Title</td>
            <td>Description</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <TaskList />
        </tbody>
      </table>
    </Card>
    </>
  );
};

export default Tasks;
