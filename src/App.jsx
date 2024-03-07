import { Routes, Route } from "react-router-dom"
import "./App.css"

import Test from "./pages/Test.jsx"
import Home from "./pages/Home.jsx"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </>
    )
}

export default App
