import React from 'react';

interface TaskFilterProps {
  status: string;
  setStatus: (status: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ status, setStatus }) => {
  return (
    <select 
      value={status} 
      onChange={(e) => setStatus(e.target.value)}
      className="block max-w-[200px] p-2 border rounded mb-4"
    >
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default TaskFilter;
