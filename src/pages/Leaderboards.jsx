import Leaderboard from "../components/Leaderboard";
import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import Button from "../components/Button";

export default function Leaderboards() {
    return (
        <Frame>
            <div className="md:flex flex-wrap gap-2">
                <Glass className="">
                    <div className="md:flex-col flex gap-2 justify-center md:max-w-xs">
                        <div className="">
                            <span className="text-slate-300 material-symbols-outlined">
                                filter_alt
                            </span>

                            <input type="text" placeholder="User" className="my-2 p-5 rounded-xl input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Level" className="p-5 rounded-xl input input-bordered w-full max-w-xs" />
                        </div>

                        <Glass className="input input-bordered h-full">
                            <span class="text-slate-300 material-symbols-outlined">
                                swap_vert
                            </span>
                            <div className="flex justify-between my-2">
                                <span className="label-text">Points</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-slate-400" checked />
                            </div>
                            <div className="flex justify-between my-2">
                                <span className="label-text">Time</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-slate-400" checked />
                            </div>
                        </Glass>

                        <Button text="Search"></Button>
                    </div>


                </Glass>
                {/* Assign a max-h-96 value here to cap the height of the leaderboard */}
                <Glass className="flex-1 max-h-[400px] overflow-scroll scrollbar-hide">
                    <Leaderboard />
                </Glass>

            </div>
        </Frame>
    );
}
