import Leaderboard from "../components/Leaderboard";
import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import Button from "../components/Button";

export default function Leaderboards() {
    return (
        <Frame noCornerNav>
            <div className="flex-wrap gap-2 md:flex">
                <Glass className="">
                    <div className="flex justify-center gap-2 md:max-w-xs md:flex-col">
                        <div className="">
                            <span className="material-symbols-outlined text-slate-300">
                                filter_alt
                            </span>

                            <input
                                type="text"
                                placeholder="User"
                                className="input input-bordered my-2 w-full max-w-xs rounded-xl p-5"
                            />
                            <input
                                type="text"
                                placeholder="Level"
                                className="input input-bordered w-full max-w-xs rounded-xl p-5"
                            />
                        </div>

                        <Glass className="input input-bordered h-full">
                            <span class="material-symbols-outlined text-slate-300">
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
                                    checked
                                />
                            </div>
                        </Glass>

                        <Button text="Search"></Button>
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
