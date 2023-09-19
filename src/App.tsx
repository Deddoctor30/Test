import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboadrd";
import NoMatch from "./pages/NoMatch/NoMatch";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import './styles/global.scss';
import EditPost from "./pages/EditPost/EditPost";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
