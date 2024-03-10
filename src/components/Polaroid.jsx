import { Link } from "react-router-dom";

export default function Polaroid(props) {
    // img = source to image
    // rotate = degrees of clockwise rotation not all degs are accepted, see tailwind docs
    // backrotate = degrees of counterclockwise rotation
    return (
        <div className="w-60">
            <Link to={props.to}>
                <div
                    className={`h-80 w-60 bg-slate-100 p-2 shadow-md hover:scale-105 hover:shadow-xl rotate-${props.rotate} -rotate-${props.backrotate} transition-all hover:rotate-0`}
                >
                    <div className="h-[80%] bg-gradient-to-b from-zinc-700 to-slate-900">
                        <img
                            className="h-full object-cover"
                            src={props.img}
                            alt={props.alt}
                        />
                    </div>
                    <p className="mt-4 font-sansui text-3xl text-slate-700">
                        {props.text}
                    </p>
                </div>
            </Link>
        </div>
    );
}
