import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { Panel } from "./pages/panel/Panel";
import { MyProfile } from "./pages/panel/MyProfile";
import { Subs } from "./pages/panel/Subs";
import { Settings } from "./pages/panel/Settings";

import { Admin } from "./pages/panel/admin/Admin";

import { NotFound } from "./pages/errors/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RandCol } from "./utils/RandCol";

function App() {
  RandCol();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/panel" element={<Navigate to="/panel/home" />} />
        <Route path="/panel/home" element={<Panel />} />
        <Route path="/panel/my-profile" element={<MyProfile />} />
        <Route path="/panel/subs" element={<Subs />} />
        <Route path="/panel/settings" element={<Settings />} />

        <Route path="/panel/admin" element={<Admin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
