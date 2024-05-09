import Glass from "../components/materials/Glass";
import Frame from "../components/Frame";
import About from "../components/About";
import HogsLogo from "../assets/HOGS logo.png";
import Button from "../components/Button";
import FadeInSection from "../components/FadeInSection";
import Trailer from "../assets/trailer.webm";
import HomeGif1 from "../assets/home-gif-1.gif";
import HomeGif2 from "../assets/home-gif-2.gif";
import HomeGif3 from "../assets/home-gif-3.gif";

export default function Home() {
    return (
        <Frame noNavbar noCornerNav noPad>
            {/* Video Hero */}
            <div className="h-screen rounded-lg bg-zinc-600 shadow-inner-3xl">
                <video muted autoPlay playsInline loop>
                    <source src={Trailer} type="video/mp4" />
                </video>

                <div
                    id="CallToAction"
                    className="absolute inset-12 flex flex-col items-center justify-center"
                >
                    <div className="mb-4 drop-shadow-md">
                        <img src={HogsLogo} alt="Hogs Logo" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Button className="bg-[#f351b281] backdrop-blur-xl hover:z-50 hover:scale-105 hover:bg-[#f351b2]">
                            <a
                                href="https://discord.com/invite/zaBS2nrY/"
                                alt="Visit HOGs' Discord Page"
                                target="_blank"
                            >
                                <div className="flex gap-2">
                                    <div className="mb-0.5 flex flex-col justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-discord"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl text-slate-200">
                                        Join the Discord
                                    </p>
                                </div>
                            </a>
                        </Button>
                        <Button className="bg-[#f351b281] backdrop-blur-xl hover:z-50 hover:scale-105  hover:bg-[#f351b2]">
                            <a
                                href="https://store.steampowered.com/app/2899270/HOGS/"
                                alt="Visit HOGs' Steam Page"
                                target="_blank"
                            >
                                <div className="flex gap-2">
                                    <div className="mb-0.5 flex flex-col justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-steam"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
                                            <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl text-slate-200">
                                        Wishlist Today
                                    </p>
                                </div>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[1280px] p-2 sm:p-6">
                {/* About section */}
                <Glass className="my-5">
                    <FadeInSection>
                        <div className="mt-5">
                            <About />
                        </div>
                        <span className="material-symbols-outlined mt-0 text-4xl text-slate-300">
                            expand_more
                        </span>
                    </FadeInSection>
                </Glass>

                <Glass
                    id="nonlinear"
                    className="my-5 justify-between gap-6 md:flex"
                >
                    <FadeInSection>
                        <div className="gap-2 md:flex">
                            <div>
                                <p className="text-left font-sansui text-2xl font-bold uppercase text-slate-200">
                                    H.O.G.S is an immersive FPS
                                </p>
                                <p className="font-sansub mt-4 text-left text-2xl font-semibold text-slate-200">
                                    Throw objects, kick down doors or smash
                                    windows and flank from behind. Use the
                                    environment to your advantage. Get smart, or
                                    get killed.
                                </p>
                            </div>
                            <div className="mt-8 flex aspect-video min-h-48 w-full justify-center md:m-auto">
                                <img
                                    className=""
                                    src={HomeGif3}
                                    alt="An animated gif showing fast-paced gameplay in HOGs"
                                ></img>
                            </div>
                        </div>
                    </FadeInSection>
                </Glass>

                <Glass
                    id="immersive FPS"
                    className="my-5 justify-between gap-6 md:flex"
                >
                    <FadeInSection>
                        <div className="gap-2 md:flex">
                            <div className="md:hidden">
                                {/* ENSURE YOU CHANGE BOTH SECTIONS IF UPDATING THIS TEXT! */}
                                <p className="text-left font-sansui text-2xl font-bold uppercase text-slate-200">
                                    Explore a dark reality
                                </p>
                                <p className="font-sansub mt-4 text-left text-2xl font-semibold text-slate-200">
                                    A Post-Singularist England ruled by pigs in
                                    a story told through environmental details
                                    and context clues.
                                </p>
                            </div>
                            <div className="mt-8 flex aspect-video min-h-48 w-full justify-center md:m-auto">
                                <img
                                    className=""
                                    src={HomeGif2}
                                    alt="An animated gif showing fast-paced gameplay in HOGs"
                                ></img>
                            </div>
                            <div className="max-md:hidden">
                                {/* ENSURE YOU CHANGE BOTH SECTIONS IF UPDATING THIS TEXT! */}
                                <p className="text-left font-sansui text-2xl font-bold uppercase text-slate-200">
                                    Explore a dark reality
                                </p>
                                <p className="font-sansub mt-4 text-left text-2xl font-semibold text-slate-200">
                                    A Post-Singularist England ruled by pigs in
                                    a story told through environmental details
                                    and context clues.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>
                </Glass>

                <Glass
                    id="nonlinear"
                    className="my-5 justify-between gap-6 md:flex"
                >
                    <FadeInSection>
                        <div className="gap-2 md:flex">
                            <div>
                                <p className="text-left font-sansui text-2xl font-bold uppercase text-slate-200">
                                    Levels are non-linear
                                </p>
                                <p className="font-sansub mt-4 text-left text-2xl font-semibold text-slate-200">
                                    There are multiple paths to choose from when
                                    engaging the enemy; will you sneak in from
                                    behind enemy lines, or go guns-a-blazing
                                    through the front door?
                                </p>
                            </div>
                            <div className="mt-8 flex aspect-video min-h-48 w-full justify-center md:m-auto">
                                <img
                                    className=""
                                    src={HomeGif1}
                                    alt="An animated gif showing fast-paced gameplay in HOGs"
                                ></img>
                            </div>
                        </div>
                    </FadeInSection>
                </Glass>

                <Glass className="my-5 py-8">
                    <Button className="bg-[#f351b281] backdrop-blur-xl hover:z-50 hover:scale-105 hover:bg-[#f351b2]">
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
                                    Wishlist H.O.G.S Today
                                </p>
                            </div>
                        </a>
                    </Button>
                    <p className="font-sansub font-semibol text-xs text-slate-400">
                        H.O.G.S is in early development, due to release for the
                        2024 holiday season.
                    </p>
                </Glass>

                {/* Footer */}
                <Glass className="my-5">
                    <div className="flex flex-col gap-4">
                        <p className="-mb-2 font-sansui text-xl">Connect</p>
                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* Discord */}
                            <div className="transition-all hover:scale-105">
                                <a
                                    href="https://discord.com/invite/zaBS2nrY/"
                                    alt="Visit HOGs' Discord Page"
                                    target="_blank"
                                >
                                    <div className="flex justify-center gap-2">
                                        <div className="mb-0.5 flex flex-col justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="currentColor"
                                                class="bi bi-discord"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* YouTube */}
                            <div className="transition-all hover:scale-105">
                                <a
                                    href="https://www.youtube.com/@Varpyg/"
                                    alt="Visit HOGs' YouTube Page"
                                    target="_blank"
                                >
                                    <div className="flex justify-center gap-2">
                                        <div className="mb-0.5 flex flex-col justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="currentColor"
                                                class="bi bi-discord"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />{" "}
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* Steam */}
                            <div className="transition-all hover:scale-105">
                                <a
                                    href="https://store.steampowered.com/app/2899270/HOGS/"
                                    alt="Visit HOGs' Steam Page"
                                    target="_blank"
                                >
                                    <div className="flex justify-center gap-2">
                                        <div className="mb-0.5 flex flex-col justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="currentColor"
                                                class="bi bi-discord"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
                                                <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Legal */}
                        <div>
                            <p className="font-sansui">
                                ©2024 Valve Corporation. Steam and the Steam
                                logo are trademarks and/or registered trademarks
                                of Valve Corporation in the U.S. and/or other
                                countries.
                            </p>
                            <p className="font-sansui">©2024 Varpyg</p>
                        </div>
                    </div>
                </Glass>

                {/* <div id="steam_embed" className="my-5 flex justify-center">
                <iframe
                    src="https://store.steampowered.com/widget/2899270/"
                    frameborder="0"
                    width="646"
                    height="190"
                ></iframe>
            </div> */}
            </div>
        </Frame>
    );
}
