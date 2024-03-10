export default function Button(props) {
    const classString = "font-sansui m-1 bg-slate-500 p-2 border-b-4 border-slate-700 rounded-lg border-solid w-28 hover:bg-slate-400 hover:w-36 transition-all";
    const styleString = `${props.className} ${classString}`;

    return (
        <button className={styleString}>
            <p>{props.text}</p>
            {props.children}
        </button>
    );
}