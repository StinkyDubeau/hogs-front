import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass"

export default function CornerNav(props) {
    return (
        <div className="fixed top-1 left-1.5">
            <Glass className="p-0">
                <div className="flex mt-0.5 mx-0.5">
                    <Link to="/">
                        <Button className="h-12 w-12 p-0 ml-1.5 rounded-[8px]"><span className="mt-1 material-symbols-outlined">home</span></Button>
                    </Link>
                    <Link to="community">
                        <Button className="h-12 w-12 p-0"><span className="mt-1 material-symbols-outlined">communities</span></Button>
                    </Link>
                    <Link to="news">
                        <Button className="h-12 w-12 p-0"><span className="mt-1 material-symbols-outlined">news</span></Button>
                    </Link>
                    <Link to="About">
                        <Button className="h-12 w-12 p-0"><span className="mt-1 material-symbols-outlined">help</span></Button>
                    </Link>
                </div>
            </Glass>
        </div>
    );
}