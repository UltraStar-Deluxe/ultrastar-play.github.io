import WaveBackground from "./WaveBackground"

const CrossPlatformSection = () => (

<>
<div id="cross-platform">
</div>

<WaveBackground colorFrom="#0f0163" colorTo="#0f0163" />

<section className="py-0" style={{background: 'linear-gradient(0deg, #380a74, #0f0163)'}}>
    <div className="container px-md-5">
        <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
                <h1 className="display-3 text-white font-alt">Choose Your Platform</h1>
                <h3 className="text-white font-alt">Windows, MacOS, Linux, Android, iOS</h3>
            </div>
        </div>
        <div className="row justify-content-center">
            <hr className="bg-light mx-5"/>

            <div className="col-12 col-md-4">
                <img src="img/platforms/svg/platforms-circle-mic-icon-center.svg"
                     style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}}/>
            </div>
            <div className="col-12 col-md-6 text-white lead">
                <p>UltraStar&nbsp;Play is a cross-platform application.
                    You can run it on all major <span className="emphasize">DESKTOP AND MOBILE</span> platforms.</p>

                <hr className="bg-light mx-5"/>

                <p>There are so many different platforms today for gaming, most singing games only focus on one.</p>
                <p>Thus, changing platforms often means losing a song collection.
                    Sometimes you even have to buy extra microphones for a particular platform or game.</p>
                
                <hr className="bg-light mx-5"/>

                <p>Fortunately, UltraStar&nbsp;Play <span className="emphasize">SOLVES&nbsp;THIS</span> because
                    it can evolve with your music taste and todays plethora of devices.</p>
                <p>Even better - you can <span className="emphasize">MIX PLATFORMS</span>.
                    For example, start the main game on an iOS tablet and connect an Android device with the Companion&nbsp;App</p>
            </div>
        </div>
    </div>
</section>

<WaveBackground flipY={true} colorFrom="#380a74" colorTo="#380a74" />
</>
)

export default CrossPlatformSection