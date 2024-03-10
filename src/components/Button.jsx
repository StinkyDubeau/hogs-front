export default function Button(props) {
    return (
        <button className="m-1 w-28 rounded-lg border-b-2 border-solid border-slate-700 bg-slate-500 p-2 font-sansui transition-all hover:w-36 hover:bg-slate-400">
            <p>{props.text}</p>
        </button>
    );
}
