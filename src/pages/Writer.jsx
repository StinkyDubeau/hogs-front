import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import { useState } from "react";

export default function Writer(props) {
    const [post, setPost] = useState({
        title: "February 2024 Development Summary",
        author: "John Blogpostwriter",
        abstract: "A month of backend work.",
        body: "Lorum ipsum dolor[...]",
    });

    function createPost() {
        return (
            <>
                <p className="text-left font-sansui text-3xl">{post.title}</p>
                <p className="text-left font-sansui text-xl">{post.author}</p>
                <p className="text-left font-sansui text-lg">{post.body}</p>
                <p className="text-right font-sansui text-xs text-slate-400">
                    id: {post._id}
                </p>
            </>
        );
    }

    return (
        <Frame noCornerNav>
            <Glass>
                <p>This is the blog writer page.</p>
            </Glass>
            <Glass>
                <div>{post && createPost}</div>
            </Glass>
        </Frame>
    );
}
