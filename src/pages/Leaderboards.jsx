import { useState } from "react";
import Leaderboard from "../components/Leaderboard";
import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import Button from "../components/Button";

export default function Leaderboards() {
    const [userid, setUserid] = useState("");
    const [level, sortLevel] = useState("");
    const [gamemode, setGamemode] = useState("");
    const [gameversion, setGameversion] = useState("");
    const [sortBy, setSortBy] = useState("");

    const [trigger, setTrigger] = useState(0);

    const [showAdvanced, setShowAdvanced] = useState(false);

    function createSummary() {
        return (
            <ul>
                <p>Sort by: {gamemode}</p>
                <p>Filter user: {userid}</p>
                <p>Filter level: {level}</p>
                <p>Sort by: {gamemode}</p>
                <p>Sort by: {gamemode}</p>
            </ul>
        );
    }

    function createAdvanced() {
        if (showAdvanced) {
            return (
                <Glass className="p-6">
                    <Glass className="bg-zinc-800">
                        <p className="font-sansui text-lg">Active params:</p>
                        <p className="mb-4 font-sansui">{createSummary()}</p>
                    </Glass>

                    <Glass className="h-full bg-zinc-800 px-8">
                        <div className="flex justify-between gap-4">
                            <p>Show cheaters</p>
                            <input
                                type="checkbox"
                                checked="checked"
                                className="checkbox"
                            />
                        </div>
                        <div className="mt-2 flex justify-between gap-4">
                            <p>Show old versions</p>
                            <input
                                type="checkbox"
                                checked="checked"
                                className="checkbox"
                            />
                        </div>
                    </Glass>
                    <div className="flex justify-center">
                        <div onClick={handleSearch}>
                            <Button text="Refresh"></Button>
                        </div>
                        <div onClick={handleClickAdvanced}>
                            <Button text="Close"></Button>
                        </div>
                    </div>
                </Glass>
            );
        } else {
            return <></>;
        }
    }

    function handleClickAdvanced() {
        showAdvanced ? setShowAdvanced(false) : setShowAdvanced(true);
    }

    function handleSearch() {
        console.log("Refreshing results.");
        setTrigger(trigger + 1);
    }

    return (
        <Frame noNavbar>
            <div className="mt-12 flex-wrap gap-2 md:flex">
                <div className="md:max-w-xs">

                        <div className="justify-center gap-2  md:flex-col">
                            <div className=" gap-2 md:inline">
                                <Glass>
                                    <span className="material-symbols-outlined text-slate-300">
                                        swap_vert
                                    </span>
                                    <div className="my-2 flex justify-between">
                                        <span className="font-sansui text-slate-300">
                                            Points
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio-10"
                                            className="radio checked:bg-slate-300"
                                            onClick={() => setSortBy("points")}
                                        />
                                    </div>
                                    <div className="my-2 flex justify-between">
                                        <span className="font-sansui text-slate-300">
                                            Time
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio-10"
                                            className="radio checked:bg-slate-300"
                                            onClick={() => setSortBy("time")}
                                        />
                                    </div>
                                </Glass>
                                <Glass className="h-full">
                                    <div>
                                        <span className="material-symbols-outlined text-slate-300">
                                            filter_alt
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="User"
                                        value={userid}
                                        className="my-2 h-12 w-full max-w-xs rounded-xl bg-[#00000044] shadow-inner-xl p-5 font-sansui"
                                        onChange={(e) =>
                                            setUserid(e.target.value)
                                        }
                                    />
                                    <input
                                        type="text"
                                        placeholder="Level"
                                        value={level}
                                        className="h-12 w-full max-w-xs rounded-xl bg-[#00000044] shadow-inner-xl p-5 font-sansui"
                                        onChange={(e) =>
                                            sortLevel(e.target.value)
                                        }
                                        onSubmit={handleSearch}
                                    />
                                    <div
                                        className="mt-2 flex justify-center"
                                        onClick={handleSearch}
                                    >
                                        <Button
                                            className="w-32"
                                            text="Filter"
                                        ></Button>
                                    </div>
                                </Glass>
                            </div>

                            <div
                                onClick={handleClickAdvanced}
                                className={() => showAdvanced && "hidden"}
                            >
                                <Button
                                    className="bg-zinc-800 hover:bg-zinc-700"
                                    text="Advanced"
                                />
                            </div>
                        </div>

                    <div>{createAdvanced()}</div>
                </div>
                {/* Assign a max-h-96 value here to cap the height of the leaderboard */}
                <Glass className="scrollbar-hide flex-1 overflow-scroll">
                    <Leaderboard
                        refresh={trigger}
                        user_id={userid}
                        level={level}
                        game_mode={gamemode}
                        sort_by={sortBy}
                    />
                </Glass>
            </div>
        </Frame>
    );
}
