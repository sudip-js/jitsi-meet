import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const user = useSelector((state) => state?.auth?.user);
  if (user?.uuid) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoutes;
