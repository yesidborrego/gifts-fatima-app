import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Login, LoginGuest, Register } from "../auth"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }/>
        <Route path="login-guest/*" element={
          <PublicRoutes>
            <LoginGuest />
          </PublicRoutes>
        }/>
        <Route path="register/*" element={
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        }/>
        <Route path="/*" element={
          <PrivateRoutes>
            <App />
          </PrivateRoutes>
        }/>
      </Routes>
    </>
  )
}
