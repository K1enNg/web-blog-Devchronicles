import { Link, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Posts from "./pages/Posts"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Homepage/>}/>
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </>
  )
}

export default App
