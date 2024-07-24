import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "../Component/TaskForm";
import TaskList from "../Component/TaskList";
import TaskFilter from "../Component/TaskFilter";
import {
  Task,
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../utils/api";
import "../App.css";

const TaskManagementPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (task: Task) => {
    const newTask = await addTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (task: Task) => {
    await updateTask(task);
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    status === "All" ? tasks : tasks.filter((task) => task.status === status);

  return (
    <div style={{width:"100%"}} className="container mx-auto rounded p-4 border-2 border-gray-400 mt-[100px]">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm addTask={handleAddTask} />
      <TaskFilter status={status} setStatus={setStatus} />
      <TaskList
        tasks={filteredTasks}
        updateTask={handleUpdateTask}
        deleteTask={handleDeleteTask}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TaskManagementPage;
