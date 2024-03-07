import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="text-white">
                <h1>Hello! This is a homepage</h1>
                <p>It's only really here to test multi-page rendering.</p>
                <Link className="underline text-blue-400" to="/test">Take me to the test page</Link>
            </div>
        </>
    );
}