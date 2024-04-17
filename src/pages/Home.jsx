import Glass from "../components/materials/Glass";
import Frame from "../components/Frame";
import About from "../components/About";
import CommunityTicker from "../components/CommunityTicker";
import HogsLogo from "../assets/HOGS logo.png";
import Button from "../components/Button";
import Trailer from "../assets/trailer.webm";
import HomeGif1 from "../assets/home-gif-1.gif";
import HomeGif2 from "../assets/home-gif-2.gif";
import HomeGif3 from "../assets/home-gif-3.gif";

export default function Home() {
    return (
        <Frame noNavbar noCornerNav>
            <div className="mt-0 sm:mt-12" />
            <Glass>
                <div className="relative max-h-[550px] overflow-hidden rounded-lg bg-zinc-600 shadow-inner-3xl">
                    <video
                        muted
                        autoPlay
                        playsInline
                        loop
                        className="min-h-96 object-cover"
                    >
                        <source src={Trailer} type="video/mp4" />
                    </video>

                    <div
                        id="CallToAction"
                        className="absolute inset-12 flex flex-col items-center justify-center"
                    >
                        <div className="mb-4 drop-shadow-md">
                            <img src={HogsLogo} alt="Hogs Logo" />
                        </div>
                        <Button className="bg-[#a53b6781] backdrop-blur-xl hover:scale-125 hover:bg-[#a34091]">
                            <a
                                href="https://store.steampowered.com/app/2899270/HOGS/"
                                alt="Visit HOGs' Steam Page"
                                target="_blank"
                            >
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="mt-1.5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
                                        <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048" />
                                    </svg>
                                    <p className="text-2xl text-slate-200">
                                        Wishlist Today
                                    </p>
                                </div>
                            </a>
                        </Button>
                    </div>
                </div>
                {/* COMMUNITY TICKER -- DISABLED IN SERVERLESS BRANCH */}
                {/* <div className="my-5">
                    <CommunityTicker />
                </div> */}
            </Glass>

            <Glass>
                <div className="mt-5">
                    <About />
                </div>
                <p className="mt-8 font-sansui text-2xl text-slate-50">
                    Scroll to learn more
                </p>
                <span className="material-symbols-outlined mt-0 text-4xl text-slate-300">
                    expand_more
                </span>
            </Glass>

            <Glass
                id="nonlinear"
                className="my-10 justify-between gap-6 md:flex"
            >
                <div>
                    <p className="text-left font-sansui text-4xl font-bold text-slate-200">
                        H.O.G.S is an immersive FPS
                    </p>
                    <p className="mt-4 text-left font-sansui text-2xl text-slate-200">
                        Throw objects, kick down doors or smash windows and
                        flank from behind. Use the environment to your
                        advantage. Get smart, or get killed.
                    </p>
                </div>
                <div className="mt-8 flex aspect-video min-h-48 justify-center md:m-auto">
                    <img
                        className=""
                        src={HomeGif3}
                        alt="An animated gif showing fast-paced gameplay in HOGs"
                    ></img>
                </div>
            </Glass>

            <Glass
                id="immersive FPS"
                className="my-10 justify-between gap-6 md:flex"
            >
                <div className="md:hidden">
                    {/* ENSURE YOU CHANGE BOTH SECTIONS IF UPDATING THIS TEXT! */}
                    <p className="text-left font-sansui text-4xl font-bold text-slate-200">
                        Explore a dark reality
                    </p>
                    <p className="mt-4 text-left font-sansui text-2xl text-slate-200">
                        A Post-Singularist England ruled by pigs in a story told
                        through environmental details and context clues.
                    </p>
                </div>
                <div className="mt-8 flex aspect-video min-h-48 justify-center md:m-auto">
                    <img
                        className=""
                        src={HomeGif2}
                        alt="An animated gif showing fast-paced gameplay in HOGs"
                    ></img>
                </div>
                <div className="max-md:hidden">
                    {/* ENSURE YOU CHANGE BOTH SECTIONS IF UPDATING THIS TEXT! */}
                    <p className="text-left font-sansui text-4xl font-bold text-slate-200">
                        Explore a dark reality
                    </p>
                    <p className="mt-4 text-left font-sansui text-2xl text-slate-200">
                        A Post-Singularist England ruled by pigs in a story told
                        through environmental details and context clues.
                    </p>
                </div>
            </Glass>

            <Glass
                id="nonlinear"
                className="my-10 justify-between gap-6 md:flex"
            >
                <div>
                    <p className="text-left font-sansui text-4xl font-bold text-slate-200">
                        Levels are non-linear
                    </p>
                    <p className="mt-4 text-left font-sansui text-2xl text-slate-200">
                        There are multiple paths to choose from when engaging
                        the enemy; will you sneak in from behind enemy lines, or
                        go guns-a-blazing through the front door?
                    </p>
                </div>
                <div className="mt-8 flex aspect-video min-h-48 justify-center md:m-auto">
                    <img
                        className=""
                        src={HomeGif1}
                        alt="An animated gif showing fast-paced gameplay in HOGs"
                    ></img>
                </div>
            </Glass>

            <Glass>
                <Button className="bg-[#a53b6781] backdrop-blur-xl hover:scale-125 hover:bg-[#a34091]">
                    <a
                        href="https://store.steampowered.com/app/2899270/HOGS/"
                        alt="Visit HOGs' Steam Page"
                        target="_blank"
                    >
                        <div className="flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="mt-1.5"
                                viewBox="0 0 16 16"
                            >
                                <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
                                <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048" />
                            </svg>
                            <p className="text-2xl text-slate-200">
                                Wishlist Today
                            </p>
                        </div>
                    </a>
                </Button>
                <p className="font-sansui">
                    H.O.G.S is in development, due to release for the 2024
                    holiday season.
                </p>
            </Glass>

            <div id="steam_embed" className="my-10 flex justify-center">
                <iframe
                    src="https://store.steampowered.com/widget/2899270/"
                    frameborder="0"
                    width="646"
                    height="190"
                ></iframe>
            </div>
        </Frame>
    );
}
