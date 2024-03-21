import { useEffect, useState } from "react";
import Glass from "../components/materials/Glass.jsx";
import Frame from "../components/Frame.jsx";

export default function Leaderboard(props) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        setScores([])
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            method: "POST",
            headers: new Headers({
                API_KEY: "this is a very insecure api key",
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                rows: 50,
                user_id: props.user_id === "" ? null : props.user_id,
                level: props.level === "" ? null : props.level,
                game_mode: props.game_mode === "" ? null : props.game_mode,
                game_version: props.game_version === "" ? null : props.game_version,
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
    }, [props.refresh]);

    function createRow(score, index) {
        return (
            <tr
                key={score._id}
                className="m-2 scale-95 rounded-lg border-slate-700 transition-all hover:scale-100 hover:bg-slate-500 hover:shadow-lg"
            >
                <td>{index + 1}</td>
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
            <div className="">
                <span className="loading loading-dots loading-sm"></span>
                <p>Loading leaderboard...</p>
            </div>
        );
    }

    return (
        <>{scores[0] != null ? createLeaderboard(scores) : createLoading()}</>
    );
}
