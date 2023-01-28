import { useContext } from "react"
import { LoginContext } from "../../auth"

export const useLogin = () => {
  const { userData } = useContext(LoginContext);

  return {
    admin: userData.admin,
  }
}
