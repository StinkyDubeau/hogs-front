export default function Button(props) {
    const glassString =
        "mb-2 overflow-hidden rounded-xl border border-x-[#ffffff20] border-b-[#ffffff16] border-t-[#ffffff44] p-5 text-slate-200 shadow-lg backdrop-blur-xl";
    let styleString = `${props.className} ${glassString}`;

    if (props.materialOnly) {
        styleString = `${props.className} border border-x-[#ffffff22] border-b-[#ffffff22] border-t-[#ffffff33] shadow-lg backdrop-blur-xl`;
    }

    return <div className={styleString}>{props.children}</div>;
}
