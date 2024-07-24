import React from 'react';

interface TaskItemProps {
  task: Task;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, updateTask, deleteTask }) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTask({ ...task, status: e.target.value });
  };

  return (
    <div className="p-4 border rounded shadow min-h-[250px] min-w-[200px]">
        <div className='flex flex-col  items-start gap-[10px]'>
        <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="text-sm">{task.description}</p>
      <select 
        value={task.status} 
        onChange={handleStatusChange}
        className="mt-2 block w-full p-2 border rounded"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
        </div>
      
      <button 
        onClick={() => deleteTask(task.id)}
        className="mt-2 px-2 py-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
