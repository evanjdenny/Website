import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTask } from "../todoSlice";

export default function CreateTask() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    console.log(time);
  };

  return (
    <div className="flex-col">
      <div className="flex justify-center items-center"></div>
      <form className="grid grid-cols-9">
        <div></div>
        <div className="col-span-4">
          <label
            htmlFor="task"
            className="absolute translate-x-2 -translate-y-4 text-sm text-slate-600"
          >
            Task
          </label>
          <input
            id="task"
            type="text"
            value={task}
            onChange={handleTaskChange}
            className="p-2 m-1 outline-none border border-slate-500 bg-slate-200 focus:bg-slate-100 shadow-lg rounded-md w-full"
            required
          />
        </div>
        <div className="flex">
          <label
            className="absolute text-sm translate-x-3 -translate-y-4 text-slate-600"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="outline-none bg-slate-100 rounded-lg my-1 border ms-2 p-1 w-full shadow-lg"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="flex">
          <label
            className="absolute text-sm translate-x-3 -translate-y-4 text-slate-600"
            htmlFor="time"
          >
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            className="outline-none bg-slate-100 rounded-lg my-1 border ms-2 p-1 w-full shadow-lg"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="flex">
          <motion.button
            onClick={(event) => {
              event.preventDefault();
              if (task && date && time) {
                setError("");
                dispatch(addTask({ task: task, date: date, time: time }));
                setTask("");
                setDate("");
                setTime("");
              } else {
                setError("Please fill out all required fields!");
              }
            }}
            className="w-full text-center bg-blue-400 text-white m-1 p-2 rounded-lg hover:bg-blue-500"
            initial={{
              filter: "drop-shadow(2px 2px 4px gray)",
            }}
            whileHover={{
              scale: 1.04,
              filter: "drop-shadow(2px 2px 4px gray)",
            }}
            whileTap={{
              scale: 0.97,
              filter: "drop-shadow(1px 1px 1px gray)",

              y: 4,
            }}
          >
            Add New Task
          </motion.button>
        </div>
      </form>
      <p className="text-center text-sm text-red-400 pb-3">{error}</p>
    </div>
  );
}
