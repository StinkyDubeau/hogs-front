import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass"

export default function Navbar() {
    return (
        <Glass>
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
        </Glass>
    );
}
