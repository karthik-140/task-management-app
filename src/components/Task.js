import { useState } from "react";
import {FaRegEdit} from "react-icons/fa"
import {RiDeleteBin6Line} from "react-icons/ri"

import { useDispatch } from "react-redux";
import { addTaskActions } from "../store/addTaskSlice";

const Task = (props) => {
  const [color, setColor] = useState('orange');
  const dispatch = useDispatch();

  const editTaskHandler = (title) =>{
    dispatch(addTaskActions.editTask({title: title}));
  }

  const colorChangeHandler = (e) =>{
     setColor((prev) => {
      return prev = e.target.value;
     })
  }

  return (
    <tr key={Math.random()}>
      <td>{props.date}</td>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>
        <select className={`rounded w-28 text-decoration-none outline-none text-${color}-500 font-semibold`} value={color} onChange={colorChangeHandler}>
          <option color="orange" value="orange" className="text-orange-500">In Progress</option>
          <option color="green" value="green" className="text-green-500">Completed</option>
          <option color="red" value="red" className="text-red-500">To do</option>
        </select>
      </td>  
      <td className="flex gap-5">
        <FaRegEdit className="cursor-pointer" onClick={() => editTaskHandler(props.title)} />
        <RiDeleteBin6Line className="cursor-pointer" onClick={() => dispatch(addTaskActions.deleteTask({title: props.title}))} />
      </td>
    </tr>
  );
};

export default Task;
