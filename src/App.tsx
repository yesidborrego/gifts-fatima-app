import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginContext } from "./auth"
import { Dashboard, GiftPage, GiftProvider, Navbar } from "./gifts"

function App() {

  const { userData: { admin } } = useContext(LoginContext);

  return (
    <GiftProvider>
      <>
        <header>
          <Navbar />
        </header>

        <main className="container my-3">
          <Routes>
            <Route path="list" element={ <GiftPage /> } />
            <Route path="dashboard" element={ admin ? <Dashboard /> : <Navigate to={"/list"}/>  } />
            <Route path="/" element={ <Navigate to={"/list"}/> } />
          </Routes>

        </main>
      </>
    </GiftProvider>
  )
}

export default App
