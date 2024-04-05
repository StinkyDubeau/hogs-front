import Frame from "../components/Frame";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Glass from "../components/materials/Glass";

export default function News(props) {
    const [posts, setPosts] = useState([]);
    const [selection, setSelection] = useState(0);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/news/all`, {
            method: "POST",
            headers: new Headers({
                API_KEY: "this is a very insecure api key",
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                rows: 150,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.refresh]);

    function createFeedItem(post, index) {
        return (
            <div key={index}>
                <button
                    className="h-12 w-56 border border-slate-100"
                    onClick={() => setSelection(index)}
                >
                    <p className="font-pixel text-slate-100">{post.title}</p>
                </button>
            </div>
        );
    }

    function createPost() {
        let post = posts[selection];
        return (
            <>
                <p className="text-left font-pixel text-3xl text-slate-100">
                    {post.title}
                </p>
                <p className="text-left font-pixel text-xl text-slate-100">
                    {post.author}
                </p>
                <p className="text-left font-pixel text-lg text-slate-100">
                    {post.body}
                </p>
                <p className="text-right font-mono text-xs text-slate-400">
                    id: {post._id}
                </p>
            </>
        );
    }

    function createNewsFeed() {
        return (
            <>
                {/* TV */}
                <div className="flex rounded-xl border-2 border-white bg-zinc-600 px-5 py-10">
                    {/* Controls */}
                    <div className="ml-5 mr-10">
                        {/* Knob */}
                        <div className="flex h-20 w-20 justify-center rounded-full bg-zinc-800 align-middle">
                            <div
                                className={`h-20 w-3 rounded-full bg-zinc-700`}
                            >
                                {selection * 2}
                            </div>
                        </div>
                    </div>

                    {/* Screen */}
                    <div className="flex justify-center gap-2 rounded-3xl border-2 border-white bg-slate-800 md:flex md:flex-initial">
                        <div className="border border-slate-200 p-4">
                            <p className="font-pixel text-3xl text-slate-400">
                                Posts
                            </p>
                            <ul className="flex flex-col">
                                {posts.map(createFeedItem)}
                            </ul>
                        </div>
                        <div className="max-h-96 flex-1 overflow-scroll border border-slate-200 p-4">
                            <p className="font-pixel text-3xl text-slate-400">
                                Selected Post
                            </p>
                            {createPost()}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    function createLoading() {
        return (
            <div className="mt-24">
                <span className="loading loading-dots loading-sm text-slate-200"></span>
                <p className="font-sansui text-xl text-slate-200">
                    Loading some news...
                </p>
            </div>
        );
    }

    return (
        <Frame noNavbar>
            {/* Only render news component if there's something loaded. */}
            {/* TODO: Load the CRT regardless of actual state. */}
            <div className="mt-2 sm:mt-12">
                {posts[0] ? createNewsFeed() : createLoading()}
            </div>
        </Frame>
    );
}
