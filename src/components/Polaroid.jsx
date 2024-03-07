import { Link } from "react-router-dom";

export default function Polaroid(props) {
    // img = source to image
    // rotate = degrees of clockwise rotation not all degs are accepted, see tailwind docs
    // backrotate = degrees of counterclockwise rotation
    return (
        <div className="w-60">
            <Link to={props.to}>
                <div className={`bg-slate-100 p-2 w-60 h-80 shadow-md hover:shadow-xl hover:scale-105 rotate-${props.rotate} -rotate-${props.backrotate} hover:rotate-0 transition-all`}>
                    <div className="bg-gradient-to-b to-slate-900 from-zinc-700 h-[80%]">
                        <img className="object-cover h-full" src={props.img} alt={props.alt} />
                    </div>
                    <p className="text-3xl mt-4 text-slate-700 font-sansui">{props.text}</p>
                </div >
            </Link>
        </div>
    );
}