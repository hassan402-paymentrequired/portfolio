import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Project from "./pages/Project"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-project" element={<Project />} />
      </Routes>
  )
}

export default App