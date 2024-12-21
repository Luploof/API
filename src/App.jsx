import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@components/Navbar.jsx";
import UserList from "@components/UserList.jsx";
import UserDetails from "@components/UserDetail.jsx";
import AlbumList from "@components/AlbumList.jsx";
import AlbumDetails from "@components/AlbumDetail.jsx";
import NotFound from "@components/NotFound.jsx";

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
