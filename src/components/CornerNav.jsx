import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass";
``;
export default function CornerNav(props) {
    return (
        <div className="fixed left-1.5 top-1 z-50">
            <Glass materialOnly className="rounded-xl">
                <div className="">
                    <Link className="" to="/">
                        <Button className="h-12 w-12">
                            <span className="material-symbols-outlined mt-1 text-slate-300">
                                home
                            </span>
                        </Button>
                    </Link>

                    <Link className="" to="/community">
                        <Button className="h-12 w-12">
                            <span className="material-symbols-outlined mt-1 text-slate-300">
                                communities
                            </span>
                        </Button>
                    </Link>

                    <Link className="" to="/news">
                        <Button className="h-12 w-12">
                            <span className="material-symbols-outlined mt-1 text-slate-300">
                                news
                            </span>
                        </Button>
                    </Link>

                    <Link className="" to="/about">
                        <Button className="h-12 w-12">
                            <span className="material-symbols-outlined mt-1 text-slate-300">
                                help
                            </span>
                        </Button>
                    </Link>
                </div>
            </Glass>
        </div>
    );
}
