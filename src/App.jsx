import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar.jsx"

import Test from "./pages/Test.jsx"
import Home from "./pages/Home.jsx"

function App() {
    return (
        <>
            <div className="text-center max-w-[1280px] m-auto p-2 sm:p-6">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div >
        </>
    )
}

export default App
