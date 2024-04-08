export default function NewsPost(post) {
    return (
        <>
            <p className="text-left font-sansui text-3xl">{post.title}</p>
            <p className="text-left font-sansui text-xl text-slate-400">
                Written by{" "}
                <span className="font-bold text-slate-100">{post.author}</span>{" "}
                {post.date}
            </p>
            <p className="text-left font-sansui text-lg">{post.body}</p>
            <p className="text-right font-sansui text-xs text-slate-400">
                id: {post._id}
            </p>
        </>
    );
}
