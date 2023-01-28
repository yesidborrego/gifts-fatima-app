import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { Loading, LoginContext } from "../auth";
import { IRoutesProps } from '../gifts/interfaces/IRoutesProps';

export const PrivateRoutes = ({ children }: IRoutesProps) => {
  const { logged, loadingLogin } = useContext(LoginContext);

  return (logged)
    ? <>{ children }</>
    : (
      loadingLogin
      ? <Loading />
      : <Navigate to={"/login-guest"} />
    )
}
