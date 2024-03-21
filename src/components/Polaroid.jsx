import { Link } from "react-router-dom";

export default function Polaroid(props) {
    // img = source to image
    // to = where to redirect when clicked
    // alt = alt text for image on polaroid

    const baseStyle =
        "h-80 w-60 bg-slate-100 p-2 shadow-md transition-all hover:rotate-0 hover:scale-105 hover:shadow-xl";
    let styleString = `${props.className} ${baseStyle}`;

    return (
        <div className="w-60">
            <Link to={props.to}>
                <div className={styleString}>
                    <div className="h-[80%] bg-gradient-to-b from-zinc-700 to-slate-900">
                        <img
                            className="h-full min-w-full object-cover"
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
