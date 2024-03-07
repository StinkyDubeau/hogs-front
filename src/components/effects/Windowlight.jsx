export default function Windowlight(props) {
    return (
        // Brightness (opacity) from 0 to 100
        <div className={`lighting-fx blur-md opacity-${props.brightness} z-50 fixed mix-blend-overlay pointer-events-none`}>
            <div className="relative mix left-[300px] top-[100px] grid gap-4 grid-cols-2">
                <div className="h-48 w-24 bg-white"></div>
                <div className="h-48 w-24 bg-white"></div>
                <div className="h-48 w-24 bg-white"></div>
                <div className="h-48 w-24 bg-white"></div>
            </div>
        </div>
    )
}