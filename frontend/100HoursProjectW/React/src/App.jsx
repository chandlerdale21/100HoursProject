import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
