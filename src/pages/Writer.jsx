import Frame from "../components/Frame";
import Glass from "../components/materials/Glass";
import NewsPost from "../components/NewsPost";
import Button from "../components/Button";
import { useState } from "react";

export default function Writer(props) {
    const now = new Date().toLocaleString();

    const [verifying, setVerifying] = useState(false);
    const [post, setPost] = useState({
        title: "",
        author: "",
        abstract: "",
        embed: "",
        date: now,
        body: "",
        _id: "1234-abcd-5678-efgh",
    });

    function createVerify() {
        console.log("CREATE VERIFY");
        return (
            <Glass>
                <p className="font-sansui text-3xl">Are you sure?</p>
                <p className="mb-2 font-sansui text-red-400">
                    Once you click submit, the only way to delete/modify the
                    post is with direct API access.
                </p>
                <div className="flex justify-center">
                    <div onClick={() => setVerifying(false)}>
                        <Button>Back</Button>
                    </div>{" "}
                    <div onClick={() => setVerifying(false)}>
                        <Button>Submit</Button>
                    </div>{" "}
                </div>
            </Glass>
        );
    }

    function createForm() {
        return (
            <Glass>
                <p className="mb-2 text-left font-sansui text-3xl">
                    Create a new news post
                </p>
                <p className="mb-2 font-sansui text-red-400">
                    Use this page for data insertion, not for writing. Your
                    changes will not be saved if the page is refreshed.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6">
                    {/* Title */}
                    <div className="flex flex-wrap gap-2 object-center">
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
                    <div className="flex flex-wrap gap-2 object-center">
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
                    {/* Abstract */}
                    <div className="flex flex-wrap gap-2 object-center">
                        <p className="mt-5 font-sansui">Abstract</p>
                        <input
                            type="text"
                            placeholder="Abstract"
                            value={post.abstract}
                            className="my-2 h-12 rounded-xl bg-[#00000044] p-5 font-sansui shadow-inner-xl"
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    abstract: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Embed */}
                    <div className="flex flex-wrap gap-2 object-center">
                        <p className="mt-5 font-sansui">Embed</p>
                        <input
                            type="text"
                            placeholder="Embed url"
                            value={post.embed}
                            className="my-2 h-12 rounded-xl bg-[#00000044] p-5 font-sansui shadow-inner-xl"
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    embed: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Body */}
                    <div className="w-100 flex flex-wrap gap-2 object-center">
                        <p className="mt-5 font-sansui">Body</p>
                        <textarea
                            type="text"
                            placeholder="Body"
                            value={post.body}
                            className="my-2 h-12 rounded-xl bg-[#00000044] p-5 font-sansui shadow-inner-xl"
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    body: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-24" onClick={() => setVerifying(true)}>
                        <Button className="w-24">Submit</Button>
                    </div>
                </div>
            </Glass>
        );
    }

    return (
        <Frame noCornerNav>
            {/* Form */}
            {verifying ? createVerify() : createForm()}

            {/* Post Preview */}
            <Glass>
                <p className="mb-2 font-sansui text-slate-400">
                    - Post preview -
                </p>
                {NewsPost(post)}
            </Glass>

            {/* Glossary */}
            <Glass>
                <div className="flex flex-col gap-6">
                    <p className="text-left font-sansui text-3xl">Glossary</p>
                    <div>
                        <p className="font-sansui text-2xl">Abstract</p>
                        <p className="text-left font-sansui">
                            20 words or less to quickly summarize your article.
                            This will be the text-equivalent of a "thumbnail"
                            for your news post. If you do not provide one, the
                            API will simply take the first 20 words of your body
                            text.
                        </p>
                    </div>
                    <div>
                        <p className="font-sansui text-2xl">Date</p>
                        <p className="text-left font-sansui">
                            Leave this field completely blank to automatically
                            inherit a date from the time the post is submitted.
                            This action is performed server-side whenever a news
                            post (with no date) is submitted.
                        </p>
                    </div>
                </div>
            </Glass>
        </Frame>
    );
}
