import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetail";
import AlbumList from "./AlbumList";
import AlbumDetails from "./AlbumDetail";
import NotFound from "./NotFound";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Пользователи</Link>
      <Link to="/albums">Альбомы</Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/album/:id" element={<AlbumDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
