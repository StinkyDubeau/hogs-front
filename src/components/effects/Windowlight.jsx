export default function Windowlight(props) {
    return (
        // Brightness (opacity) from 0 to 100
        <div
            className={`lighting-fx blur-md opacity-${props.brightness} pointer-events-none fixed z-50 mix-blend-overlay`}
        >
            <div className="mix relative left-[300px] top-[100px] grid grid-cols-2 gap-4">
                <div className="h-48 w-24 bg-white"></div>
                <div className="h-48 w-24 bg-white"></div>
                <div className="h-48 w-24 bg-white"></div>
                <div className="h-48 w-24 bg-white"></div>
            </div>
        </div>
    );
}
