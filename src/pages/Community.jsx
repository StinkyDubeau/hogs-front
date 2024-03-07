import { Link } from "react-router-dom"
import Polaroid from "../components/Polaroid";
import Corkboard from "../components/Corkboard";
import Windowlight from "../components/effects/Windowlight";

export default function Community() {
    return (
        <>


            <div className="bg-amber-800 bg-cork static shadow-inner-4xl overflow-hidden">
                <Windowlight />
                <div className="flex justify-center gap-20 p-20">
                    <Polaroid backrotate="3" text="No image" to="/" />
                    <Polaroid rotate="3" text="Four" to="/" img="./test-image-one.jpg" alt="an image of the number four painted on a white brick wall" />
                    <Polaroid rotate="6" text="Leaderboards" to="/test" img="./hogs-background.png" />
                </div>
            </div>
        </>
    );
}