import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CreateInfo from "./CreateInfo";
import Nav from "./Nav";
import InfoList from "./InfoList";
import Edit from "./Edit";
const App = () => {
  return (
    <div>
      <Nav />
      {/* <nav className="navbar bg-dark  navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              ~ Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="create" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<InfoList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<CreateInfo />} />
      </Routes>
    </div>
  );
};

export default App;
