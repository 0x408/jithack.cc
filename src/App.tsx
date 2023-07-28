import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { Panel } from "./pages/panel/Panel";
import { MyProfile } from "./pages/panel/MyProfile";

import { NotFound } from "./pages/errors/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/panel/home" element={<Panel />} />
        <Route path="/panel/my-profile" element={<MyProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
