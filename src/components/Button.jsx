export default function Button(props) {
    return (
        <button className="font-sansui m-1 bg-slate-500 p-2 border-b-4 border-slate-700 rounded-lg border-solid w-28 hover:bg-slate-400 hover:w-36 transition-all">
            <p>{props.text}</p>
        </button>
    );
}