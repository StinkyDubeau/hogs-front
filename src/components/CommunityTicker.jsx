import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function CommunityTicker(props) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            headers: new Headers({
                API_KEY: "this is a very insecure api key",
            }),
            method: "POST",
            body: JSON.stringify({
                "rows": "3",
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

    function createScore(score, index) {
        return(
            <p key={index} className="font-sansui text-3xl">{score.user_id}</p>
        );
    }

    function createMarquee() {
        console.log("Render marquee screen")

        return (
            <Marquee>
                scores.map(createScore);
                <p>I'm a marquee item</p>
                <p>Me too!</p>
            </Marquee>

        );
    }

    function createLoading() {
        console.log("Render loading screen")
        return <p>Loading scores...</p>;
    }

    return (
        <div className="flex">
            <p className="text-nowrap font-sansui text-2xl">Latest scores:</p>
            {createLoading}

            {scores[0] !== null ? createMarquee : createLoading}
        </div>
    );
}
