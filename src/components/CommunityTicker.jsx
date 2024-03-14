export default function CommunityTicker(props) {
    return (
        <div className="flex h-9">
            <h1 className="w-96 bg-red-400 font-sansui text-3xl">
                Community feed:{" "}
            </h1>
            <div>
                <h1 className="w-full text-nowrap bg-red-500 font-sansui text-3xl">
                    This is a scrolling ticker. This is a scrolling ticker. This
                    is a scrolling ticker. This is a scrolling ticker.{" "}
                </h1>
            </div>
        </div>
    );
}
