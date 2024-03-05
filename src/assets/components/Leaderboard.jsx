import { useEffect, useState } from 'react';

export default function Leaderboard() {
    const [scores, setScores] = useState([])
    const [columns, setColumns] = useState(["user_id", "points", "time"]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            headers: new Headers({
                API_KEY: 'this is a very insecure api key',
            }),
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
                <td className="text-right text-xs justify-between">
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
            <>
                <table>
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

            </>
        )
    }

    // function createHeader(headers) {
    //     return (
    //         <>
    //             <div className="overflow-scroll flex gap-5 justify-evenly text-left bg-slate-500 p-2 my-2 px-8 text-slate-800 border-slate-700 border-b-4 rounded-lg">
    //                 <p>Position</p>
    //                 <p>User</p>
    //                 <p>Level</p>
    //                 <p>Points</p>
    //                 <p>Time</p>
    //                 <p>Details</p>
    //             </div>
    //         </>
    //     )
    // }

    // function createLeaderboard(score, index) {
    //     return (
    //         <>
    //             {index === 0 && createHeader()}
    //             <div className="overflow-scroll flex gap-5 justify-evenly text-left bg-slate-500 p-2 my-2 px-8 text-slate-800 border-slate-700 border-b-4 border-t-1 border-t-slate-200 rounded-lg">
    //                 <p>{index}</p>
    //                 <p>{score.user_id}</p>
    //                 <p>{score.level}</p>
    //                 <p>{score.points}</p>
    //                 <p>{score.time}</p>

    //                 <div className="text-right text-xs justify-between">
    //                     <div>
    //                         <p>Gamemode: {score.game_mode}</p>
    //                         <p>Game version: {score.game_version}</p>
    //                     </div>
    //                     <p className="">{score._id}</p>
    //                 </div>
    //             </div>

    //         </>
    //     )
    // }

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
