import { Link } from "react-router-dom";
import Glass from "../components/materials/Glass";

export default function Home() {
    return (
        <>
            <Glass>
                <h1>Hello! This is the homepage</h1>
                <p>It's only really here to test multi-page rendering.</p>
                <p>
                    There's a navbar above, which is only here for hopping
                    between pages during this testing phase. You'll find the
                    community page has big margins around the cork: that's a
                    side-effect of the navbar and isn't intended to be there
                    long-term.
                </p>
                <Link className="text-blue-400 underline" to="/test">
                    Take me to the test page
                </Link>
            </Glass>
        </>
    );
}
