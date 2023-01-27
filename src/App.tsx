import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, GiftPage, Navbar } from "./gifts"

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container my-3">
        <Routes>
          <Route path="list" element={ <GiftPage /> } />
          <Route path="dashboard" element={ <Dashboard /> } />
          <Route path="/" element={ <Navigate to={"/list"}/> } />
        </Routes>

      </main>
    </>
  )
}

export default App
