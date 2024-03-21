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
            <h1 className="font-sansui text-3xl tracking-widest">
                A reimagined classic
            </h1>
            <p>
                Hogs is the perfect union between the political satire of
                'Animal Farm' and the bleak oppression of '1984'.
            </p>
            <p>
                The story roughly follows the plot of 'Animal Farm', sixteen
                years after the original, reimagined for a modern audience via a
                new interactive medium.
            </p>
        </div>
    );
}
