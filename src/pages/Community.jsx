import Polaroid from "../components/Polaroid";
import Windowlight from "../components/effects/Windowlight";
import Frame from "../components/Frame";

export default function Community() {
    return (
        <Frame noNavbar noPad>
            <div className="h-screen overflow-scroll bg-amber-800 bg-cork shadow-inner-4xl">
                <Windowlight brightness="50" />
                <div className="flex flex-wrap justify-center gap-10 md:mt-56 mt-10">
                    <div className="">
                        <Polaroid
                            className="-rotate-3"
                            text="No image"
                            to="/"
                        />
                    </div>
                    <div className="">
                        <Polaroid
                            className="rotate-3"
                            text="Four"
                            to="/"
                            img="./test-image-one.jpg"
                            alt="the number four painted on a white brick wall"
                        />
                    </div>
                    <div className="">
                        <Polaroid
                            className="rotate-6"
                            text="Leaderboards"
                            to="/leaderboards"
                            img="./hogs-background.png"
                            alt="hogs gameplay"
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
}
