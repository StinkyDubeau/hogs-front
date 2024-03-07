import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar.jsx"

import Test from "./pages/Test.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Community from "./pages/Community.jsx"

function App() {
    return (
        <>
            <div className="text-center max-w-[1280px] m-auto p-2 sm:p-6">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </div >
        </>
    )
}

export default App
