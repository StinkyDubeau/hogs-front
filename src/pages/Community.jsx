import Polaroid from "../components/Polaroid";
import Windowlight from "../components/effects/Windowlight";
import Frame from "../components/Frame";
import DiscordImg from "../assets/discord.webp"
import NewsImg from "../assets/news.webp"
import LeaderImg from "../assets/leaderboards.webp"

export default function Community() {
    return (
        <Frame noNavbar noPad>
            <div className="h-screen overflow-scroll bg-amber-800 bg-cork shadow-inner-4xl">
                <Windowlight brightness="50" />
                <div className="flex flex-wrap justify-center gap-10 md:mt-56 mb-32 my-10">
                    <div className="">
                        <Polaroid
                            className="-rotate-3"
                            text="Discord"
                            img={DiscordImg}
                            to="/"
                            alt="A pig wearing a gaming headset."
                        />
                    </div>
                    <div className="">
                        <Polaroid
                            className="rotate-3"
                            text="Dev News"
                            to="/news"
                            img={NewsImg}
                            alt="A pig reading the news."
                        />
                    </div>
                    <div className="">
                        <Polaroid
                            className="rotate-6"
                            text="Leaderboards"
                            to="/leaderboards"
                            img={LeaderImg}
                            alt="Three pigs on a podium."
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
}
