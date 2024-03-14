import { Link } from "react-router-dom";
import Glass from "../components/materials/Glass";
import Frame from "../components/Frame";
import About from "./About";

export default function Home() {
    return (
        <Frame noNavbar>
            <About />
        </Frame>
    );
}
