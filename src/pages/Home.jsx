import { Link } from "react-router-dom";
import Glass from "../components/materials/Glass";
import Frame from "../components/Frame";
import About from "./About";
import CommunityTicker from "../components/CommunityTicker";
import HogsLogo from "../assets/HOGS logo.png";
import Button from "../components/Button";

export default function Home() {
    function useIsVisible(ref) {
        const [isIntersecting, setIntersecting] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                setIntersecting(entry.isIntersecting);
            });

            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }, [ref]);

        return isIntersecting;
    }

    return (
        <Frame noNavbar>
            <div className="mt-0 sm:mt-12" />
            <Glass>
                <CommunityTicker />
                <div className="relative h-1/2 overflow-hidden rounded-lg bg-zinc-600 shadow-inner-3xl">
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
            </Glass>

            <div className="mb-32" />
            <p className="mb-0 font-sansui text-2xl text-slate-50">
                Scroll to learn more
            </p>
            <span className=" material-symbols-outlined mt-0 text-4xl text-slate-300">
                expand_more
            </span>
            <div className="mt-96" />

            <div id="about">
                <p>About page</p>
                {/* <About /> */}
            </div>
        </Frame>
    );
}
