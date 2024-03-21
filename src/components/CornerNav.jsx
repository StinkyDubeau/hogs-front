import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass";
``;
export default function CornerNav(props) {
    return (
        <div className="fixed bottom-0 left-0 z-50 h-16 w-screen m-0 bg-center sm:left-1.5 sm:top-1 sm:w-auto">
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
