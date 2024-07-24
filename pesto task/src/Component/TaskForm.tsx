import React, { useState, FormEvent } from "react";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

interface Task {
  id?: number;
  title: string;
  description: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description, status });
      setTitle("");
      setDescription("");
      setStatus("To Do");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded border-2 p-3 border-gray-200 max-w-[500px] min-w-[320px] m-auto">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="block w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full p-2 border rounded"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="block w-full p-2 border rounded"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
