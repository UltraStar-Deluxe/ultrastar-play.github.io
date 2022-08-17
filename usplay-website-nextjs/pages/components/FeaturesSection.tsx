import WaveBackground from "./WaveBackground"

const FeatureItem = (props: {icon: string, title: string, children?: React.ReactNode}) => (
    <div className="col-md-6 col-lg-4">
        <div className="text-center mb-3">
            <i className={`${props.icon} icon-feature text-gradient d-block`}></i>
            <h3 className="font-alt">{props.title}</h3>
            <p className="text-muted mb-0">{props.children}</p>
        </div>
    </div>
)

const FeaturesSection = () => (

<>
<div  id="features" className="stage-and-audience-background text-white pt-5">
    <div className="container">
        <div className="row">
            {/* Feature overview */}
            <div className="row row-cols-auto justify-content-center">
                <h1>With UltraStar Play, <span className="emphasize">YOU'LL GET</span>:</h1>
            </div>
            <div className="row row-cols-auto justify-content-center lead">
                <div className="mx-5" >
                    <ul className="item-symbol-mic">
                        <li>Pitch detection to guide your voice</li>
                        <li>Custom songs and song editor</li>
                        <li>Cooperative score mode</li>
                        <li>Duet songs</li>
                    </ul>
                </div>
                <div className="mx-5">
                    <ul className="item-symbol-mic">
                        <li>Companion App as mic</li>
                        <li>Favorites and playlists</li>
                        <li>Up to 16 players</li>
                        <li>Controller support</li>
                    </ul>
                </div>
            </div>

            {/* YouTube video (game teaser)  */}
            <div className="row gx-5 my-5 justify-content-center">
                <div className="col-lg-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4hXKOLafpDg" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{maxWidth: "100%"}}></iframe>
                </div>
            </div>

            {/* Imagine fun time */}
            <div className="row row-cols-auto justify-content-center">
                <h2>Imagine what it would be like to...</h2>
            </div>
            <div className="row row-cols-auto justify-content-center lead">
                <div className="mx-5" >
                    <ul className="item-symbol-mic">
                        <li>Throw a singing party with family and friends</li>
                        <li>Break the highscore or sing duets together</li>
                        <li>Create the songs you want, no matter your taste in music</li>
                        <li>Use your smartphone as mic, no need to buy additional equipment</li>
                        <li>Start the game anywhere, right from your smartphone</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<WaveBackground flipX={false} flipY={true} colorFrom="#151515" colorTo="#151515" />

<section>
    <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="container-fluid px-5">
                <div className="row gx-5">
                    <FeatureItem icon="bi-phone" title="Companion App">
                        Use your smartphone as mic or browse the song list with the UltraStar&nbsp;Play Companion&nbsp;App.
                    </FeatureItem>

                    <FeatureItem icon="bi-people" title="Solos, Duets, Groups">
                        Sing a duet where each player has different lyrics and notes.
                        Or make a party and sing with up to 16 players at the same time.
                    </FeatureItem>
                    
                    <FeatureItem icon="bi-collection-play" title="Open song format">
                        UltraStar&nbsp;Play supports a widespread and open song format. Create and change songs as you please.
                    </FeatureItem>

                    <FeatureItem icon="bi-pencil" title="Song editor">
                        The integrated song editor lets you create a karaoke version of any song you like - unlimited possibilities!
                    </FeatureItem>

                    <FeatureItem icon="bi-music-note-list" title="Playlists & Favorites">
                        Handle large song collections by marking songs as favorites, adding playlists, or searching for songs by <i>language</i>, <i>year</i>, <i>artist</i>, etc.
                    </FeatureItem>

                    <FeatureItem icon="bi-person-hearts" title="Entertained Audience">
                        Each song can have a background video or image. A delight for both, the audience and the singers. 
                    </FeatureItem>

                    <FeatureItem icon="bi-link-45deg" title="Score Modes">
                        A cooperative score mode emphasizes SINGING TOGETHER with your loved ones. You can also turn off scores and ratings completely.
                    </FeatureItem>

                    <FeatureItem icon="bi-file-earmark-person" title="Player & Mic Profiles">
                        Configure each player and device individually. Quickly switch microphones between players.
                    </FeatureItem>

                    <FeatureItem icon="bi-controller" title="Controller Support">
                        No need to hang around your keyboard. Just use your gamepad to control UltraStar&nbsp;Play.
                    </FeatureItem>
                </div>
            </div>
        </div>
    </div>
</section>

</>
)

export default FeaturesSection