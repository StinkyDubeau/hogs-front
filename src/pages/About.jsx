import ReactPlayer from "react-player";
import Frame from "../components/Frame";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <Frame noNavbar>
            <div className="text-slate-200">
                <p>About page</p>
                <Link to="/" className="underline text-blue-500">Back to home</Link>
                <ReactPlayer
                    className="-z-50 mask-radial"
                    url="https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%"
                />
                <h1 className="font-sansui text-3xl tracking-widest">
                    A reimagined classic
                </h1>
                <p>
                    Hogs is the perfect union between the political satire of
                    'Animal Farm' and the bleak oppression of '1984'.
                </p>
                <p>
                    The story roughly follows the plot of 'Animal Farm', sixteen
                    years after the original, reimagined for a modern audience
                    via a new interactive medium.
                </p>
            </div>
        </Frame>
    );
}
