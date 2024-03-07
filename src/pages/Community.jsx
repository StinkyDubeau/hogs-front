import { Link } from "react-router-dom"

export default function Community() {
    return (
        <>
            <div className="text-white">
                <h1>This is a community page</h1>
                <Link className="underline text-blue-400" to="/test">Take me to the test page</Link>
            </div>
        </>
    );
}