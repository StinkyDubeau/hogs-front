import Leaderboard from "../components/Leaderboard";
import Frame from "../components/Frame";
import Glass from "../components/materials/Glass"

export default function Leaderboards() {
    return (
        <Frame>
            <div className="md:flex flex-wrap gap-2">
                <Glass className="">
                    <p className="text-left">Custom Leaderboard</p>

                </Glass>
                <Glass className="flex-1 max-h-96 overflow-scroll scrollbar-hide">
                    <Leaderboard />
                </Glass>

            </div>
        </Frame>
    );
}
