import { useState } from "react";
import Leaderboard from "../components/Leaderboard";
import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import Button from "../components/Button";

export default function Leaderboards() {
    const [sortUser, setSortUser] = useState("");
    const [sortLevel, setSortLevel] = useState("");
    const [sortMode, setSortMode] = useState("");
    const [sortVersion, setSortVersion] = useState("");

    const [showAdvanced, setShowAdvanced] = useState(false);

    function createSortUser() {
        return (
            <>
                Showing {sortUser}'s scores on {sortLevel}
            </>
        );
    }

    function handleClickAdvanced() {
        setSortLevel("hi");
    }

    function handleSearch() {
        setSortUser("heeei");
    }

    return (
        <Frame noCornerNav>
            <div className="flex-wrap gap-2 md:flex">
                <Glass className="">
                    <div className="flex justify-center gap-2 md:max-w-xs md:flex-col">
                        <div className="">
                            <span className="material-symbols-outlined text-slate-300">
                                filter_alt
                            </span>
                            <p>{createSortUser()}</p>
                            <input
                                type="text"
                                placeholder="User"
                                value={sortUser}
                                className="input input-bordered my-2 w-full max-w-xs rounded-xl p-5"
                                onChange={(e) => setSortUser(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Level"
                                value={sortLevel}
                                className="input input-bordered w-full max-w-xs rounded-xl p-5"
                                onChange={(e) => setSortLevel(e.target.value)}
                            />
                        </div>

                        <Glass className="input input-bordered h-full">
                            <span className="material-symbols-outlined text-slate-300">
                                swap_vert
                            </span>
                            <div className="my-2 flex justify-between">
                                <span className="label-text">Points</span>
                                <input
                                    type="radio"
                                    name="radio-10"
                                    className="radio checked:bg-slate-400"
                                    checked
                                />
                            </div>
                            <div className="my-2 flex justify-between">
                                <span className="label-text">Time</span>
                                <input
                                    type="radio"
                                    name="radio-10"
                                    className="radio checked:bg-slate-400"
                                    // checked
                                />
                            </div>
                        </Glass>
                        <div onClick={handleSearch}>
                            <Button className="w-60" text="Search"></Button>
                        </div>
                        <div onClick={handleClickAdvanced}>
                            <Button
                                className="bg-zinc-700 hover:bg-zinc-600"
                                text="Advanced"
                            />
                        </div>
                    </div>
                </Glass>
                {/* Assign a max-h-96 value here to cap the height of the leaderboard */}
                <Glass className="scrollbar-hide max-h-[400px] flex-1 overflow-scroll">
                    <Leaderboard />
                </Glass>
            </div>
        </Frame>
    );
}
