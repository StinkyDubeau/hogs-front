import ReactPlayer from "react-player";
import Trailer from "../assets/trailer.webm";

export default function About(props) {
    return (
        <div className="text-slate-200">
            <div className="m-auto max-w-screen-lg">
                <h1 className="my-5 font-sansui text-6xl tracking-widest">
                    <span className="text-7xl">A classic</span>
                    <br />
                    reimagined
                </h1>
                <p className="font-sansui text-2xl">
                    H.O.G.S is the perfect union between the political satire of
                    <i>Animal Farm</i> and the bleak oppression of <i>1984</i>.
                    The story roughly follows the plot of <i>Animal Farm</i>,
                    sixteen years after the original, reimagined for a modern
                    audience via a new interactive medium.
                </p>
            </div>
        </div>
    );
}
