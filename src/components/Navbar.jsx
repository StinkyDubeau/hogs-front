import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass";
import Logo from "../assets/StateSingularIcon.png";

export default function Navbar() {
    return (
        <div className="">
            <Glass className="m-0">
                <div className="site-logo mb-3 flex justify-center">
                    <Link to="/">
                        <img
                            className="max-h-12 transition-all hover:scale-110"
                            src={Logo}
                            alt="studio logo"
                        />
                    </Link>
                    
                </div>
                <p className="font-sansui my-2">Varpyg Developer Menu</p>
                <div className="flex-wrap justify-center">
                    <Link to="/">
                        <Button text="Home" />
                    </Link>
                    <Link to="/news">
                        <Button text="News" />
                    </Link>
                    <Link to="/writer">
                        <Button text="News Writer" />
                    </Link>
                    <Link to="/test">
                        <Button text="Test" />
                    </Link>
                    <Link to="/about">
                        <Button
                            text="About"
                        />
                    </Link>
                </div>
            </Glass>
        </div>
    );
}
