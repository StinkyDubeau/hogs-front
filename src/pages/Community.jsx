import Polaroid from "../components/Polaroid";
import Windowlight from "../components/effects/Windowlight";
import Frame from "../components/Frame";

export default function Community() {
    return (
        <Frame noNavbar noPad>
            <div className="h-screen overflow-hidden bg-amber-800 bg-cork shadow-inner-4xl">
                <Windowlight brightness="50" />
                <div className="">
                    <div className="flex justify-center gap-20">
                        <Polaroid backrotate="3" text="No image" to="/" />
                        <Polaroid
                            rotate="3"
                            text="Four"
                            to="/"
                            img="./test-image-one.jpg"
                            alt="an image of the number four painted on a white brick wall"
                        />
                        <Polaroid
                            rotate="6"
                            text="Leaderboards"
                            to="/test"
                            img="./hogs-background.png"
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
}
