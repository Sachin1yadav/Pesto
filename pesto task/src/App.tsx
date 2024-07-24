import React from 'react';
import TaskManagementPage from './pages/TaskManagementPage';
import Navbar from './Component/Navbar';
 
 const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <TaskManagementPage />
    </div>
  );
};

export default App;
