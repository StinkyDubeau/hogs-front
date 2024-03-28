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
                <Button className="w-56" onClick={() => setSelection(index)}>
                    <p className="font-pixel text-slate-100">{post.title}</p>
                </Button>
            </div>
        );
    }

    function createPost() {
        let post = posts[selection];
        return (
            <>
                <p className="font-pixell text-left text-3xl text-slate-100">
                    {post.title}
                </p>
                <p className="text-left font-pixel text-xl text-slate-100">
                    {post.author}
                </p>
                <p className="text-left font-pixel text-lg text-slate-100">
                    {post.body}
                </p>
                <p className="text-right font-pixel text-xs text-slate-100 text-slate-400">
                    id: {post._id}
                </p>
            </>
        );
    }

    function createNewsFeed() {
        return (
            <>
                <div className="flex justify-center gap-2  md:flex md:flex-initial">
                    <div className="p-4">
                        {/* <p className="font-pixel text-3xl">Posts</p> */}
                        <ul className="flex flex-col gap-2">
                            {posts.map(createFeedItem)}
                        </ul>
                    </div>
                    <div className="flex-1 p-4">
                        {/* <p className="font-pixel text-3xl">Selected Post</p> */}
                        {createPost()}
                    </div>
                </div>
            </>
        );
    }

    function createLoading() {
        return (
            <div className="mt-24">
                <span className="loading loading-dots loading-sm text-slate-200"></span>
                <p className="font-pixel text-xl text-slate-200">
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
