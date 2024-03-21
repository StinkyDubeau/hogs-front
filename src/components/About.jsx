import ReactPlayer from "react-player";

export default function About(props) {
    return (
        <div className="text-slate-200">
            <ReactPlayer
                playsinline
                className="-z-50 mask-radial"
                url="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_20mb.mp4"
                playing
                muted
                loop
                width="100%"
                height="100%"
            />
            <div className="m-auto max-w-screen-lg">
                <h1 className="font-sansui text-6xl tracking-widest">
                    A reimagined classic
                </h1>
                <p className="font-sansui text-2xl">
                    Hogs is the perfect union between the political satire of
                    <i>Animal Farm</i> and the bleak oppression of <i>1984</i>.
                    The story roughly follows the plot of <i>Animal Farm</i>, sixteen
                    years after the original, reimagined for a modern audience
                    via a new interactive medium.
                </p>
            </div>
        </div>
    );
}
