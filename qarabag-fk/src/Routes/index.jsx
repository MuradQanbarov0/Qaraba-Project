import Home from "../Pages/Home";
import { Routes, Route } from "react-router";
import Trainers from "../Pages/Trainers";
import Players from "../Pages/Players";

const MyRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/players" element={<Players />} />
        <Route path="/*" element={<h1>not found</h1>} />
      </Routes>
    </div>
  );
};

export default MyRouting;
