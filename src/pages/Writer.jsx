import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import NewsPost from "../components/NewsPost";
import { useState } from "react";

export default function Writer(props) {
    const [post, setPost] = useState({
        title: "February 2024 Development Summary",
        author: "John Blogpostwriter",
        abstract: "A month of backend work.",
        body: "Lorum ipsum dolor[...]",
        _id: "1234-abcd-5678-efgh"
    });

    return (
        <Frame noCornerNav>
            <Glass>
                <p>This is the blog writer page.</p>
            </Glass>
            <Glass>
                {NewsPost(post)}
            </Glass>
        </Frame>
    );
}
