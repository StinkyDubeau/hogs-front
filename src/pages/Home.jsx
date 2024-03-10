import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="rounded-xl border-x border-b-2 border-t-2 border-white border-x-[#ffffff22] border-b-[#00000033] border-t-[#ffffff33] p-5 text-slate-200 shadow-lg backdrop-blur-xl">
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
            </div>
        </>
    );
}
