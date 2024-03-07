import ReactPlayer from "react-player";

export default function About() {
    return (
        <>
            <div className="text-slate-200">
                <ReactPlayer
                className="-z-50"
                url="https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
                playing muted loop
                width="100%"
                height="100%"
                />
                <p>About page</p>
                <img></img>
                <h1 className="text-3xl font-sansui tracking-widest">A reimagined classic</h1>
            </div>
        </>
    );
}