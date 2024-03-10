import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";

export default function Leaderboards() {
    return (
        <>
            <div className="flex-1 rounded-xl border border-white border-x-[#ffffff22] border-b-[#ffffff11] border-t-[#ffffff33] p-5 text-slate-200 shadow-lg backdrop-blur-xl">
                <Leaderboard />
            </div>
        </>
    );
}
