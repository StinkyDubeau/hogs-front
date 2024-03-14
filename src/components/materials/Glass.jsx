export default function Button(props) {
    const glassString =
        "mb-2 rounded-xl border border-x-[#ffffff22] border-b-[#ffffff22] border-t-[#ffffff33] p-5 text-slate-200 shadow-lg backdrop-blur-xl";
    const styleString = `${props.className} ${glassString}`;

    return <div className={styleString}>{props.children}</div>;
}
