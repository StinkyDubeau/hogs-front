import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="flex gap-2 text-slate-300">
            <p>Logo</p>
            <Link to="/"><Button text="Home"/></Link>
            <Link to="/test"><Button text="Test"/></Link>
        </div>
    );
}