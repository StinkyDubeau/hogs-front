import Frame from "../components/Frame";
import Button from "../components/Button";
import { useState, useEffect } from "react";

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

    function createFeedItem(post) {
        return (
            <>
                <div>
                    <Button>
                        <p>{post.title}</p>
                    </Button>
                </div>
            </>
        );
    }

    function createNewsFeed() {
        return (
            <>
                <div className="flex border-2 border-slate-200">
                    <div className="flex-0 border-2 border-slate-200 p-4">
                        <p className="font-sansui text-3xl">Posts</p>
                        <ul>{posts.map(createFeedItem)}</ul>
                    </div>
                    <div className="flex-1 border-2 border-slate-200">
                        <p className="font-sansui text-3xl">Selected Post</p>
                    </div>
                </div>
            </>
        );
    }

    function createLoading() {
        return (
            <div className="mt-24">
                <span className="loading loading-dots loading-sm"></span>
                <p className="font-sansui text-xl">Loading some news...</p>
            </div>
        );
    }

    return (
        <Frame noNavbar>
            <p>This is the news.</p>

            <div>{posts[0] ? createNewsFeed() : createLoading()}</div>
        </Frame>
    );
}
