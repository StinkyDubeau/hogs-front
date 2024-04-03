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
                "Content-Type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify({
                rows: "30",
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
            <div className="flex">
                <div className="w-12"></div>
                <p key={index} className="m-0 p-0 font-sansui text-3xl">
                    {`${score.user_id} beat ${score.level} in ${parseInt(score.time / 1000)} seconds.`}
                </p>
            </div>
        );
    }

    function createMarquee() {
        console.log("Render marquee screen");

        return (
            <>
                <Marquee speed="150" className="mt-6">
                    {scores.map(createScore)}
                </Marquee>
            </>
        );
    }

    function createLoading() {
        console.log("Render loading screen");

        return (
            <div className="mt-8 w-full">
                <span className="loading loading-dots loading-sm"></span>
            </div>
        );
    }

    return (
        <div className="flex h-20 justify-between">
            <div className="flex flex-col justify-center">
                <div>
                    <p className="text-center font-sansui text-3xl text-slate-200">
                        Latest scores:
                    </p>
                </div>
            </div>
            <div className="w-[80%] rounded-xl border border-x-slate-800 border-y-slate-800 shadow-inner-2xl">
                {scores ? createMarquee() : createLoading()}
            </div>
        </div>
    );
}
