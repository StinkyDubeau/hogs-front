import { useEffect, useState } from 'react'

export default function Score () {
    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3001/api/scores', {
            method: 'get',
            headers: new Headers({
                API_KEY: 'this is a very insecure api key',
            })
        })
            .then(response => response.json())
            .then(data => {
                setScores(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    function createScore(score) {
        return (
            <div className='text-left bg-slate-500 p-2 my-2 px-8 text-slate-800 border-slate-700 border-b-4 rounded-lg'>
                <p>User ID: {score.user_id}</p>
                <p>Map: {score.level}</p>
                <p>Points: {score.points}</p>
                <p>Time: {score.time}</p>
                <p>Gamemode: {score.game_mode}</p>
                <p>Game version: {score.game_version}</p>
                <p className="text-xs">Unique Score ID: {score._id}</p>           
            </div>
        )
    }

    return (
        <>
            <p>I'm a score component -{5 + 5}-</p>

            //Show all of the scores returned from the server. Display them all as simple cards for now.
            {scores.map(createScore)}

            <div className='text-left bg-slate-500 p-2 px-8 text-slate-800 border-slate-700 border-b-4 shadow-lg rounded-lg'>
                <p className='text-slate-300'>There were {scores.length} responses from the server.</p>
                <p>{JSON.stringify(scores)}</p>
            </div>
        </>
    )
}
