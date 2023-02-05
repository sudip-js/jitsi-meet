import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const user = useSelector((state) => state?.auth?.user);
  if (user?.uuid) {
    return <Navigate to="/jitsi-meet/dashboard" />;
  } else {
    return children;
  }
};

export default PublicRoutes;
