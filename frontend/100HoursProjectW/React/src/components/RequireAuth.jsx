import { Navigate } from "react-router-dom";
function RequireAuth({ children }) {
  if (localStorage.getItem("success")) {
    return children;
  }
  return <Navigate to="/" />;
}

export default RequireAuth;
