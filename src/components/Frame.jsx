import Navbar from "./Navbar";

export default function Frame(props) {
    // Make this frame component the parent of all components on a page.
    // Declare (<Frame noNavbar noFooter>) to disable those elements.
    return (
        <div className="m-auto max-w-[1280px] p-2 text-center sm:p-6">
            {!props.noNavbar && <Navbar />}
            {props.children}
        </div>
    );
}