import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { Panel } from "./pages/panel/Panel";
import { MyProfile } from "./pages/panel/MyProfile";
import { Settings } from "./pages/panel/Settings";

import { NotFound } from "./pages/errors/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/panel" element={<Navigate to="/panel/home" />} />
        <Route path="/panel/home" element={<Panel />} />
        <Route path="/panel/my-profile" element={<MyProfile />} />
        <Route path="/panel/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
