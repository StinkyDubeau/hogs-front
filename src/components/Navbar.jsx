import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass"
import Logo from "../assets/StateSingularIcon.png";

export default function Navbar() {
    return (
        <Glass>
            <div className="site-logo flex justify-center mb-3">
                <Link to="/">
                    <img className="hover:scale-110 max-h-12 transition-all" src={Logo} alt="studio logo"/>
                </Link>
            </div>
            <div className="flex-wrap justify-center">
                <Link to="/">
                    <Button text="Home" />
                </Link>
                <Link to="/test">
                    <Button text="Test" />
                </Link>
                <Link to="/about">
                    <Button className="bg-zinc-500 hover:bg-zinc-400" text="About*" />
                </Link>
                <Link to="/community">
                    <Button className="bg-zinc-500 hover:bg-zinc-400" text="Community*" />
                </Link>
                <Link to="/leaderboards">
                    <Button text="Leaderboard" />
                </Link>
            </div>
            <p className="text-xs text-slate-300">*No navbar</p>
        </Glass>
    );
}
