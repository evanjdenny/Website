import { useSelector, useDispatch } from "react-redux";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import { removeTask, toggleCompleted } from "./todoSlice";
import { useEffect, useState } from "react";

export default function ToDoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [newTasks, setNewTasks] = useState([]);

  useEffect(() => {
    const newNewTasks = newTasks.slice();
    for (let i = 0; i < tasks.length; i++) {
      newNewTasks.push(tasks[i].task);
    }
    setNewTasks(newNewTasks);
    console.log(newTasks);
  }, []);

  const complete = [];
  const incomplete = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      complete.push(
        <Task
          i={i}
          key={i}
          task={tasks[i].task}
          completed={tasks[i].completed}
          date={tasks[i].date}
          time={tasks[i].time}
          toggle={() => dispatch(toggleCompleted(i))}
          remove={() => dispatch(removeTask(i))}
        />
      );
    } else {
      incomplete.push(
        <Task
          i={i}
          key={i}
          task={tasks[i].task}
          completed={tasks[i].completed}
          date={tasks[i].date}
          time={tasks[i].time}
          toggle={() => dispatch(toggleCompleted(i))}
          remove={() => dispatch(removeTask(i))}
        />
      );
    }
  }

  return (
    <div className="flex-col">
      <CreateTask />
      <div className="flex-col">
        {incomplete.length > 0 && (
          <div className="flex-col bg-red-200 mx-1 pb-1">
            <p className="text-xl bg-red-500 ps-2 text-white">Incomplete</p>
            {incomplete}
          </div>
        )}
        {complete.length > 0 && (
          <div className="flex-col bg-green-200 mx-1 pb-1">
            <p className="text-xl bg-green-500 ps-2 text-white">Complete</p>
            {complete}
          </div>
        )}
      </div>
    </div>
  );
}
