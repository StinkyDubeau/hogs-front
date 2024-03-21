import Frame from "../components/Frame";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Glass from "../components/materials/Glass"

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
                    <p>{post.title}</p>
                </Button>
            </div>
        );
    }

    function createPost() {
        let post = posts[selection];
        return (
            <>
                <p className="text-left font-sansui text-3xl">{post.title}</p>
                <p className="text-left font-sansui text-xl">{post.author}</p>
                <p className="text-left font-sansui text-lg">{post.body}</p>
                <p className="text-right font-sansui text-xs">{post._id}</p>
            </>
        );
    }

    function createNewsFeed() {
        return (
            <>
                <div className="flex gap-2 justify-center">
                    <Glass className="flex-0 p-4">
                        {/* <p className="font-sansui text-3xl">Posts</p> */}
                        <ul className="flex flex-col gap-2">{posts.map(createFeedItem)}</ul>
                    </Glass>
                    <Glass className="flex-1 p-4">
                        {/* <p className="font-sansui text-3xl">Selected Post</p> */}
                        {createPost()}
                    </Glass>
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
            {/* Only render news component if there's something loaded. */}
            {/* TODO: Load the CRT regardless of actual state. */}
            <div className="mt-12">
                {posts[0] ? createNewsFeed() : createLoading()}
            </div>
        </Frame>
    );
}
