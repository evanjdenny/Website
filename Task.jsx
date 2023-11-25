import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTaskText, toggleCompleted } from "../todoSlice";

export default function Task({
  i,
  task,
  completed,
  date,
  time,
  toggle,
  remove,
}) {
  const tasks = useSelector((state) => state.todo.tasks);
  const [newTask, setNewTask] = useState(task);
  const [editTask, setEditTask] = useState(false);
  const dispatch = useDispatch;

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="flex justify-between items-center m-1 bg-white py-1 rounded">
      <div className="flex">
        {!editTask && (
          <>
            <p className="text-lg ps-3">{task}</p>
            <motion.button
              onClick={() => setEditTask(true)}
              className="ps-2"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                y: 10,
                opacity: 0,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </motion.button>
          </>
        )}
        {editTask && (
          <div className="flex">
            <input
              type="text"
              value={newTask}
              onChange={handleNewTaskChange}
              className="bg-slate-100 outline-none mx-2 rounded-lg py-1 px-2 w-96"
            />
            <button
              className="bg-blue-300 text-white text-sm px-4 py-1 rounded-full"
              onClick={() => {}}
            >
              Save
            </button>
          </div>
        )}
      </div>
      <div className="flex shrink">
        <div className="flex-col text-center px-1 bg-slate-300 rounded-lg">
          <p className="text-xs">Time</p>
          <p className="text-sm bg-black text-white px-1 mb-1 rounded-full">
            {tasks[i].time}
          </p>
        </div>
        <div className="flex-col text-center px-2 mx-1 bg-slate-300 rounded-lg">
          <p className="text-xs">Date</p>
          <p className="text-sm bg-black text-white px-1 mb-1 rounded-full">
            {tasks[i].date}
          </p>
        </div>
        <div className="flex">
          {tasks[i].completed ? (
            <motion.button
              onClick={toggle}
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="bg-red-400 text-white px-4 py-2 rounded-xl hover:bg-red-500"
            >
              Undo
            </motion.button>
          ) : (
            <motion.button
              onClick={() => dispatch(toggleCompleted(i))}
              className="bg-green-400 text-white px-4 py-2 rounded-xl hover:bg-green-500"
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Complete
            </motion.button>
          )}
          <motion.button
            onClick={remove}
            className="bg-red-500 text-white p-2 rounded-full mx-1 shadow hover:bg-red-600"
            whileHover={{
              scale: 1.18,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            X
          </motion.button>
        </div>
      </div>
    </div>
  );
}
