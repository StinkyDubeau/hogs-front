import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="text-slate-200 backdrop-blur-xl border-white border-t-[#ffffff33] border-x-[#ffffff22] border-b-[#00000033] shadow-lg border-t-2 border-b-2 mb-5 border-x p-5 rounded-xl">
            <p>Logo</p>
            <Link to="/"><Button text="Home"/></Link>
            <Link to="/test"><Button text="Test"/></Link>
            <Link to="/about"><Button text="About"/></Link>
            <Link to="/community"><Button text="Community"/></Link>
        </div>
    );
}