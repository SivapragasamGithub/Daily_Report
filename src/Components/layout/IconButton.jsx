import React from "react";

function IconButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center "
    >
      {icon}
    </button>
  );
}

export default IconButton;
