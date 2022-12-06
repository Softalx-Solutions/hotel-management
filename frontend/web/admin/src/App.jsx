import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import { Dashboard, Settings } from "./pages";
import { SideBar } from "./components";

const App = () => {
  return (
    <>
      <SideBar />
      <div className="md:ml-64">
        <Outlet/>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
