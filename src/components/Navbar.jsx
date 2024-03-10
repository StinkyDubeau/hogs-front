import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass"
import Logo from "../assets/StateSingularIcon.png";

export default function Navbar() {
    return (
        <Glass>
            <div className="site-logo flex justify-center mb-3">
                <button>
                    <img className="hover:scale-110 max-h-12 transition-all" src={Logo} alt="studio logo"/>
                </button>
            </div>
            <div className="flex justify-center">
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
        </Glass>
    );
}
