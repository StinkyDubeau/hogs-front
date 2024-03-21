export default function Windowlight(props) {
    return (
        // Brightness (opacity) from 0 to 100
        <div
            className={`lighting-fx blur-md opacity-${props.brightness} pointer-events-none fixed z-30 mix-blend-overlay`}
        >
            <div className="mix relative left-[300px] top-[100px] grid grid-cols-2 gap-8">
                <div className="h-96 w-48 bg-white"></div>
                <div className="h-96 w-48 bg-white"></div>
                <div className="h-96 w-48 bg-white"></div>
                <div className="h-96 w-48 bg-white"></div>
            </div>
        </div>
    );
}
