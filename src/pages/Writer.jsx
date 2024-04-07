import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import NewsPost from "../components/NewsPost";
import { useState } from "react";

export default function Writer(props) {
    const [post, setPost] = useState({
        title: "",
        author: "",
        abstract: "",
        body: "",
        _id: "1234-abcd-5678-efgh",
    });

    return (
        <Frame noCornerNav>
            <Glass>
                <p className="font-sansui text-3xl text-left">Create a new news post</p>
                <p className="mb-2 font-sansui text-red-400">
                    Use this page for data insertion, not for writing. Your
                    changes will not be saved if the page is refreshed.
                </p>

                <div className="flex flex-wrap justify-center gap-x-6">
                    {/* Title */}
                    <div className="flex gap-2 object-center">
                        <p className="mt-5 font-sansui">Title</p>
                        <input
                            type="text"
                            placeholder="December Devlog"
                            value={post.title}
                            className="my-2 h-12 rounded-xl bg-[#00000044] p-5 font-sansui shadow-inner-xl"
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>{" "}
                    {/* Author */}
                    <div className="flex gap-2 object-center">
                        <p className="mt-5 font-sansui">Author</p>
                        <input
                            type="text"
                            placeholder="Author"
                            value={post.author}
                            className="my-2 h-12 rounded-xl bg-[#00000044] p-5 font-sansui shadow-inner-xl"
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    author: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
            </Glass>

            {/* Post Preview */}
            <Glass>
                <p className="mb-2 font-sansui text-slate-400">
                    - Post preview -
                </p>
                {NewsPost(post)}
            </Glass>
        </Frame>
    );
}
