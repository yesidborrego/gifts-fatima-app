import { IUserData, IUserDataForm } from "..";

export type TypeAuthContext = {
  userData: IUserData,
  logged: boolean,
  loadingLogin: boolean,
  login: ({email, password}:IUserDataForm) => void,
  signup: ({email, password}: IUserDataForm) => void,
  logout: () => void,
}
