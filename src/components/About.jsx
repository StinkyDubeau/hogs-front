import ReactPlayer from "react-player";
import Trailer from "../assets/trailer.webm";

export default function About(props) {
    return (
        <div className="text-slate-200">
            <div className="m-auto max-w-screen-lg">
                <h1 className="my-5 text-center font-sansui text-4xl font-extrabold uppercase tracking-widest transition-all sm:text-6xl">
                    <span className="text-5xl tracking-widest transition-all sm:text-7xl">
                        A classic
                    </span>
                    <br />
                    reimagined
                </h1>
                <p className="font-sansub text-2xl font-semibold">
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
