import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="font-bold text-white cursor-pointer">Todo App</div>
      </div>
    </div>
  );
};

export default Navbar;
