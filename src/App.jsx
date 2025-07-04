import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import Header from "./static/Header";
import UserDetail from "./pages/UserDetail";

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserDetail/:id" element={<UserDetail />} />
          <Route path="/CreateUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
