import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
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

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="  flex flex-grow flex-wrap gap-[10px]">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
