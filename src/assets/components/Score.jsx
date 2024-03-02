import { useEffect, useState } from 'react'

export default function Score () {
    const [scores, setScores] = useState([])

    useEffect(() => {
        console.log('useEffect')
        fetch('http://127.0.0.1:3001/topPlayer')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setScores(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    function createScores () {}

    return (
        <>
            <p>I'm a score component -{5 + 5}-</p>
        </>
    )
}
