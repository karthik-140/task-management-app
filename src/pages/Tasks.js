import { MdOutlinePostAdd } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { addTaskActions } from "../store/addTaskSlice";

import Card from "../UI/card";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

const Tasks = () => {
  const dispatch = useDispatch();
  const { displayAddTask } = useSelector((state) => state.addTask);

  const addTaskHandler = () => {
    dispatch(addTaskActions.displayAddTaskHandler());
  };
  console.log(displayAddTask);
  return (
    <>
      {displayAddTask && <AddTask />}
      <Card>
        <header className="flex justify-between items-center mb-3 ">
          <h1 className="font-bold">Task Management</h1>
          <div className="flex gap-8">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search Task`}
                className="relative px-8 w-40 rounded-3xl border-2 border-blue-500 text-decoration-none outline-none"
                onChange={(e) =>
                  dispatch(
                    addTaskActions.filterTasks({ search: e.target.value })
                  )
                }
              />
              <BiSearch className="absolute top-2 left-3 text-blue-500" />
            </div>
            <button
              onClick={addTaskHandler}
              className="bg-blue-600 px-4 py-1 text-white rounded-xl w-fit flex gap-2 items-center"
            >
              <MdOutlinePostAdd />
              Add New Task
            </button>
          </div>
        </header>
        <hr />
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
