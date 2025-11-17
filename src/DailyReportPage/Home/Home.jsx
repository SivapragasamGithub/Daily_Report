import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <button className="absolute top-0 left-0 p-4 bg-blue-500 text-white rounded mt-5 ml-5">
        <Link to={"/"}>Home </Link>
      </button>
    </div>
  );
}

export default Home;
