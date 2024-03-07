export default function Windowlight() {
    return (
        <div className="lighting-fx blur-md z-50 fixed mix-blend-overlay pointer-events-none">
            <div className="relative mix left-[300px] top-[100px] grid gap-4 grid-cols-2">
                <div className="h-48 w-24 bg-slate-200">1</div>
                <div className="h-48 w-24 bg-white">2</div>
                <div className="h-48 w-24 bg-white">3</div>
                <div className="h-48 w-24 bg-white">4</div>
            </div>
        </div>
    )
}