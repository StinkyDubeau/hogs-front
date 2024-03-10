import { useEffect, useState } from "react";

export default function Leaderboard(props) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            headers: new Headers({
                API_KEY: "this is a very insecure api key",
            }),
            method: "POST",
            body: JSON.stringify({
                rows: 3,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setScores(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function createRow(score, index) {
        return (
            <tr key={score._id} className="m-2 scale-95 rounded-lg border-slate-700 transition-all hover:scale-100 hover:bg-slate-500 hover:shadow-lg">
                <td>{index}</td>
                <td>{score.user_id}</td>
                <td>{score.level}</td>
                <td>{score.points}</td>
                <td>{score.time}</td>
                <td className="justify-between text-right text-xs text-slate-400">
                    <div>
                        <p>Gamemode: {score.game_mode}</p>
                        <p>Game version: {score.game_version}</p>
                    </div>
                    <p className="">{score._id}</p>
                </td>
            </tr>
        );
    }

    function createLeaderboard(scores) {
        return (
            <table className="w-full table-auto">
                <thead className="scale-95">
                    <tr>
                        <th>Position</th>
                        <th>User</th>
                        <th>Level</th>
                        <th>Points</th>
                        <th>Time</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>{scores.map(createRow)}</tbody>
            </table>
        );
    }

    function createLoading() {
        return (
            <div>
                <span className="loading loading-spinner loading-md"></span>
                <p>Loading leaderboard...</p>
            </div>
        );
    }

    return (
        <>
            <div className="max-h-96 overflow-scroll scrollbar-hide rounded-xl border-x-2 border-t-4 border-zinc-700 bg-zinc-600 p-4">
                {scores[0] != null
                    ? createLeaderboard(scores)
                    : createLoading()}
            </div>

            <div className="my-5 rounded-xl border-x-2 border-t-4 border-zinc-700 bg-zinc-600 p-4">
                <p className="text-slate-300">
                    There were {scores.length} responses from the server. Here
                    is the raw data:
                </p>
                <p className="border-t-1 my-2 flex max-h-96 justify-evenly gap-5 overflow-scroll scrollbar-hide rounded-lg border-b-4 border-slate-700 border-t-slate-200 bg-slate-500 p-2 px-8 text-left text-slate-800">
                    {JSON.stringify(scores)}
                </p>
            </div>
        </>
    );
}
