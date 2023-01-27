// import { useContext } from "react"
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../auth";
import { IRoutesProps } from '../gifts/interfaces/IRoutesProps';

export const PrivateRoutes = ({ children }: IRoutesProps) => {
  // const { authState: { logged } } = useContext(AuthContext);
  const logged = true;

  return (logged)
    ? children
    : <Navigate to={"/login"} />
}
