import { Link } from "react-router-dom";
import Glass from "../components/materials/Glass";
import Frame from "../components/Frame";
import About from "./About";
import CommunityTicker from "../components/CommunityTicker";
import ReactPlayer from "react-player";
import HogsLogo from "../assets/HOGS logo.png";
import Button from "../components/Button";

export default function Home() {
    return (
        <Frame noNavbar>
            <div className="">
                <div>
                    <div className="mt-12" />
                    <CommunityTicker />
                    <div className="mt-32" />

                    <div className="relative h-96 overflow-hidden rounded-lg bg-zinc-600 shadow-inner-3xl">
                        <video muted autoPlay loop>
                            <source
                                src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_20mb.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div
                            id="CallToAction"
                            className="absolute inset-32 flex flex-col items-center justify-center"
                        >
                            <div className="mb-4 drop-shadow-md">
                                <img src={HogsLogo} alt="Hogs Logo" />
                            </div>
                            <Button>
                                <p className="text-2xl text-slate-200">
                                    Wishlist now
                                </p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <About /> */}
        </Frame>
    );
}
