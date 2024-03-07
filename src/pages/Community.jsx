import { Link } from "react-router-dom"
import Polaroid from "../components/Polaroid";
import Corkboard from "../components/Corkboard";

export default function Community() {
    return (
        <>
            <div className="bg-amber-800">
                <h1>Hello world</h1>
                <div className="Polaroids">
                    <Polaroid backrotate="3" text="No image" to="/" />
                    <Polaroid rotate="3" text="Four" to="/" img="./test-image-one.jpg" alt="an image of the number four painted on a white brick wall" />
                    <Polaroid rotate="6" text="Leaderboards" to="/test" img="./hogs-background.png" />
                </div>
            </div>
        </>
    );
}