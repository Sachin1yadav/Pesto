import axios from "axios";
import { toast } from "react-toastify";

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

const BASE_URL = "http://localhost:5000/tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addTask = async (task: Task): Promise<Task> => {
  const response = await axios.post(BASE_URL, task);
  toast.success("Task added successfully!");
  return response.data;
};

export const updateTask = async (updatedTask: Task): Promise<void> => {
  await axios.put(`${BASE_URL}/${updatedTask.id}`, updatedTask);
  toast.info("Task updated successfully!");
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
  toast.error("Task deleted successfully!");
};
