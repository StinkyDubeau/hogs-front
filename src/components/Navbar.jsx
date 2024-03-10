import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="mb-5 rounded-xl border-x border-b-2 border-t-2 border-white border-x-[#ffffff22] border-b-[#00000033] border-t-[#ffffff33] p-5 text-slate-200 shadow-lg backdrop-blur-xl">
            <p>Logo</p>
            <Link to="/">
                <Button text="Home" />
            </Link>
            <Link to="/test">
                <Button text="Test" />
            </Link>
            <Link to="/about">
                <Button text="About" />
            </Link>
            <Link to="/community">
                <Button text="Community" />
            </Link>
            <Link to="/leaderboards">
                <Button text="Leaderboard" />
            </Link>
        </div>
    );
}
