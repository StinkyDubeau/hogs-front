import { Link } from "react-router-dom";
import Button from "./Button";
import Glass from "../components/materials/Glass"

export default function CornerNav(props) {
    return(
        <div className="fixed top-0 left-0">
            <Glass>
                <h1>Hello world.</h1>
            </Glass>
        </div>
    );
}