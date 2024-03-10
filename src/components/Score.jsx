import { useEffect, useState } from "react";

export default function Score() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            headers: new Headers({
                API_KEY: "this is a very insecure api key",
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

    function createScore(score) {
        return (
            <div className="my-2 rounded-lg border-b-4 border-slate-700 bg-slate-500 p-2 px-8 text-left text-slate-800">
                <p>User ID: {score.user_id}</p>
                <p>Map: {score.level}</p>
                <p>Points: {score.points}</p>
                <p>Time: {score.time}</p>
                <p>Gamemode: {score.game_mode}</p>
                <p>Game version: {score.game_version}</p>
                <p className="text-xs">Unique Score ID: {score._id}</p>
            </div>
        );
    }

    return (
        <>
            <p>API url: {`${import.meta.env.VITE_API_URL}/api/scores`}</p>
            <p>
                Loaded{" "}
                <span className="hover:bold underline">{scores.length}</span>{" "}
                scores from the server.
            </p>

            {scores.map(createScore)}

            <div className="rounded-lg border-b-4 border-slate-700 bg-slate-500 p-2 px-8 text-left text-slate-800 shadow-lg">
                <p className="text-slate-300">
                    There were {scores.length} responses from the server.
                </p>
                <p>{JSON.stringify(scores)}</p>
            </div>
        </>
    );
}
