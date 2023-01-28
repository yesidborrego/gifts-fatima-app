import { IRoutesProps } from "../../gifts/interfaces/IRoutesProps";
import { LoginContext, IUserData, IUserDataForm } from "../";
import { auth } from "../../db/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const initialState: IUserData = {
  admin: false,
  email: null,
}

export const LoginProvider = ({ children }: IRoutesProps) => {
  const [userData, setUserData] = useState<IUserData>(initialState);
  const [logged, setLogged] = useState<boolean>(false);
  const [loadingLogin, setLoadingLogin] = useState<boolean>(true);

  const signup = ({email, password}: IUserDataForm) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = ({email, password}: IUserDataForm) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    signOut(auth)
  }

  useEffect(() => {
    setLoadingLogin(true)
    onAuthStateChanged(auth, user => {
      if(user) {
        const { email } = user;
        setUserData({
          admin: email !== "invitado@babyshower.com",
          email,
        });
        setLogged(true)
      } else {
        setUserData({
          admin: false,
          email: null,
        });
        setLogged(false)
      }
      setLoadingLogin(false)
    })
  }, [])

  return (
    <LoginContext.Provider value={{ userData, logged, login, signup, logout, loadingLogin }}>
      { children }
    </LoginContext.Provider>
  )
}
