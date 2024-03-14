import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Glass from "./materials/Glass";

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
            <p key={index} className="font-sansui p-0 m-0 text-3xl">
                {`${score.user_id} got ${score.points} points on ${score.level}.`}
            </p>
        );
    }

    function createMarquee() {
        console.log("Render marquee screen");

        return (
            <>
                <Marquee speed="150" className="mt-5">{scores.map(createScore)}</Marquee>
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
        <div className="flex h-20 justify-between">
            <div className="flex flex-col justify-center">
                <p className="text-center text-slate-200 font-sansui text-3xl">
                    Latest scores:
                </p>
            </div>
            <Glass materialOnly className=" rounded-xl w-[80%] border-x-slate-800 border-b-slate-800 border-t-slate-800 shadow-inner-2xl">
                {scores ? createMarquee() : createLoading()}
            </Glass>
        </div>
    );
}
