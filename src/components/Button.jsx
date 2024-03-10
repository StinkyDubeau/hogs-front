import Glass from "./materials/Glass"

export default function Button(props) {
    const classString = "m-1 py-1 hover:scale-105 focus:scale-95 hover:bg-[#64748b] bg-[#64748b83] hover:shadow-xl transition-all";
    const legacyStyle = "font-sansui m-1 bg-slate-500 p-2 border-b-4 border-slate-700 rounded-lg border-solid w-28 hover:bg-slate-400 hover:w-36 transition-all";
    const styleString = `${props.className} ${classString}`;

    return (

        <button className="font-sansui">
            <Glass className={styleString}>
                <p>{props.text}</p>
                {props.children}
            </Glass>
        </button >
    );
}