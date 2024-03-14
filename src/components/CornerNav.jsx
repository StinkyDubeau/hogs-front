import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass";

export default function CornerNav(props) {
    return (
        <div className="fixed left-1.5 top-1">
            <Glass className="p-0">
                <div className="mx-0.5 mt-0.5 flex">
                    <Link to="/">
                        <Button className="ml-1.5 h-12 w-12 rounded-[8px] p-0">
                            <span className="material-symbols-outlined mt-1">
                                home
                            </span>
                        </Button>
                    </Link>
                    <Link to="community">
                        <Button className="h-12 w-12 p-0">
                            <span className="material-symbols-outlined mt-1">
                                communities
                            </span>
                        </Button>
                    </Link>
                    <Link to="news">
                        <Button className="h-12 w-12 p-0">
                            <span className="material-symbols-outlined mt-1">
                                news
                            </span>
                        </Button>
                    </Link>
                    <Link to="About">
                        <Button className="h-12 w-12 p-0">
                            <span className="material-symbols-outlined mt-1">
                                help
                            </span>
                        </Button>
                    </Link>
                </div>
            </Glass>
        </div>
    );
}
