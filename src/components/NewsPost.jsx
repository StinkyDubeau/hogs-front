export default function NewsPost(post) {
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
