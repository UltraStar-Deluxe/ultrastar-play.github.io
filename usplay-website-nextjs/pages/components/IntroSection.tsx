import isWindows from "../utils"
import ImageCarousel from "./ImageCarousel"
import WaveBackground from "./WaveBackground"
import Typewriter, { TypewriterClass } from "typewriter-effect"
import SocialMediaLinks from "./SocialMediaLinks"

const PlatformComponent = () => 
{
    if (isWindows())
    {
        return <p>WINDOWS!</p>
    }
    else
    {
        return <p>NON WINDOWS!</p>
    }
}

const typewriterTexts = ["sing your favorite songs?", "challenge your friends?", "feel like a superstar?"]

const IntroSection = () => (
<>
<section className="masthead">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                {/* Mashead text and app badges */}
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                    <h1 className="lh-1 mb-3 font-alt">Enjoy a Fun Singing Party!</h1>
                    <div className="lead text-muted" style={{marginBottom: '1rem'}}>
                        Want to <span className="emphasize"><Typewriter options={{autoStart: true, loop: true, strings: typewriterTexts, delay: 50}} /></span>
                    </div>
                    <p className="lead text-muted">UltraStar&nbsp;Play is a singing game with boundless possibilities, without the need to buy additional hardware.</p>
                    <p className="lead text-muted">Players sing along their favorite songs and try to hit notes for points.
Feel like a superstar while you break the highscore! Invite your family and friends to rock the virtual stage together!</p>

                    <p className="lead text-muted">Checkout the <a href="https://github.com/UltraStar-Deluxe/Play/wiki/First-Steps">wiki</a> to get started or <a href="https://discord.gg/PAUJFKCGbb">Discord</a> for questions.</p>

                    <div className="lead text-muted mb-5">Follow the project on <SocialMediaLinks /></div>

                    {/* Buttons */}
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px"}}>Get UltraStar&nbsp;Play</a>
                        <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px"}}>Get Companion&nbsp;App</a>
                        {/* Sponsor Button  */}
                        {/* <a className="btn btn-block sponsor-button mb-2" style="margin-left: 5px; margin-right: 5px; width: 300px; height: 45px; box-shadow: none;" aria-label="Sponsor @UltraStarPlay" target="_top" href="https://usplay.net/sponsors.html">
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-heart icon-sponsor text-pink mr-2">
                                <path fill-rule="evenodd" fill="#eb54af" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>
                            </svg>
                            <span>Sponsor</span>
                        </a>  */}
                    </div>
                </div>
            </div>

            <ImageCarousel />
        </div>
    </div>
</section>

</>
)

export default IntroSection