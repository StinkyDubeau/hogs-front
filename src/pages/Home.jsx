import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="text-slate-200 backdrop-blur-xl border-white border-t-[#ffffff33] border-x-[#ffffff22] border-b-[#00000033] shadow-lg border-t-2 border-b border-x p-5 rounded-xl">
                <h1>Hello! This is the homepage</h1>
                <p>It's only really here to test multi-page rendering.</p>
                <p>There's a navbar above, which is only here for hopping between pages during this testing phase. You'll find the community page has big margins around the cork: that's a side-effect of the navbar and isn't intended to be there long-term.</p>
                <Link className="underline text-blue-400" to="/test">Take me to the test page</Link>
            </div>
        </>
    );
}