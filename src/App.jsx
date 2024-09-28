// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import CreatePost from "./Component/CreatePost";
import Post from "./Component/Post";
import SignIn from "./Component/SignIn";

function App() {
  return (
    <Router>
      <div className="max-w-4xl mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
