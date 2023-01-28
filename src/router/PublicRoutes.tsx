import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { IRoutesProps } from '../gifts/interfaces/IRoutesProps';
import { Loading, LoginContext } from "../auth";

export const PublicRoutes = ({ children }: IRoutesProps) => {
  const { logged, loadingLogin } = useContext(LoginContext);

  return (logged)
    ? (
      loadingLogin
      ? <Loading />
      : <Navigate to={"/"} />
    )
    : <>{ children }</>
}
