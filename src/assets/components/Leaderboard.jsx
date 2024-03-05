import { useEffect, useState } from 'react';

export default function Leaderboard() {
    const [scores, setScores] = useState([])
    const [columns, setColumns] = useState(["user_id", "points", "time"]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            headers: new Headers({
                API_KEY: 'this is a very insecure api key',
            }),
            method: "POST",
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setScores(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function createRow(score, index) {
        return (
            <tr className="">
                <td>{index}</td>
                <td>{score.user_id}</td>
                <td>{score.level}</td>
                <td>{score.points}</td>
                <td>{score.time}</td>
                <td className="text-right text-xs justify-between text-slate-400">
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
            <table className="table-auto w-full">
                <tr>
                    <th>Position</th>
                    <th>User</th>
                    <th>Level</th>
                    <th>Points</th>
                    <th>Time</th>
                    <th>Details</th>
                </tr>
                {scores.map(createRow)}
            </table>
        )
    }

    function createLoading() {
        return (
            <p>Loading leaderboards...</p>
        )
    }

    return (
        <>
            <div>
                <p>Choose columns:</p>
            </div>

            <div className="bg-zinc-600 max-h-96 overflow-scroll border-t-4 border-x-2 border-zinc-700 rounded-xl p-4">
                {scores[0] != null ? createLeaderboard(scores) : createLoading()}
            </div>

            <div className="my-5 bg-zinc-600 border-t-4 border-x-2 border-zinc-700 rounded-xl p-4">
                <p className='text-slate-300'>There were {scores.length} responses from the server. Here is the raw data:</p>
                <p className="overflow-scroll max-h-96 flex gap-5 justify-evenly text-left bg-slate-500 p-2 my-2 px-8 text-slate-800 border-slate-700 border-b-4 border-t-1 border-t-slate-200 rounded-lg">{JSON.stringify(scores)}</p>
            </div>
        </>
    )
}
