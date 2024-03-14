import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function CommunityTicker(props) {
    const [scores, setScores] = useState();

    const gap = "    ";

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/scores`, {
            headers: new Headers({
                API_KEY: "this is a very insecure api key",
            }),
            method: "POST",
            body: JSON.stringify({
                rows: "3",
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
        return (
            <p key={index} className="font-sansui text-3xl">
                {`${score.user_id} got ${score.points} points on ${score.level}.`}
            </p>
        );
    }

    function createMarquee() {
        console.log("Render marquee screen");

        return (
            <>
                <Marquee speed="150">{scores.map(createScore)}</Marquee>
            </>
        );
    }

    function createLoading() {
        console.log("Render loading screen");

        return (
            <div className="w-full">
                <span className="loading loading-dots loading-sm"></span>
            </div>
        );
    }

    return (
        <div className="flex">
            <p className="text-nowrap font-sansui text-2xl">Latest scores:</p>
            {scores ? createMarquee() : createLoading()}
        </div>
    );
}
