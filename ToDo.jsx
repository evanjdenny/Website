import ToDoList from "../features/todo/ToDoList";

export default function ToDo() {
  return (
    <div className="flex-col">
      <div className="flex justify-center items-center">
        <p className="text-3xl">To-Do List</p>
      </div>
      <ToDoList />
    </div>
  );
}
