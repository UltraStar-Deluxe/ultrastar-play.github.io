const FeaturesSection = () => (

<section id="features">
    <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="container-fluid px-5">
                <div className="row gx-5">
                    <div className="col-md-6 col-lg-4">
                        {/* Feature item */}
                        <div className="text-center mb-3">
                            <i className="bi-phone icon-feature text-gradient d-block"></i>
                            <h3 className="font-alt">Companion App</h3>
                            <p className="text-muted mb-0">Use your smartphone as mic or browse the song list with the UltraStar&nbsp;Play <a href="https://github.com/UltraStar-Deluxe/Play" style={{whiteSpace: "nowrap"}}>Companion App</a>.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* Feature item */}
                        <div className="text-center mb-5">
                            <i className="bi-people icon-feature text-gradient d-block"></i>
                            <h3 className="font-alt">Solos, Duets, Groups</h3>
                            <p className="text-muted mb-0">Sing a duet with a friend or make a party and sing with up to 16 players at the same time.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* Feature item */}
                        <div className="text-center  mb-5">
                            <i className="bi-music-note-list icon-feature text-gradient d-block"></i>
                            <h3 className="font-alt">Playlists & Favorites</h3>
                            <p className="text-muted mb-0">Handle large song collections by marking songs as favorites or adding playlists.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* Feature item */}
                        <div className="text-center  mb-5">
                            <i className="bi-file-earmark-person icon-feature text-gradient d-block"></i>
                            <h3 className="font-alt">Player & Mic Profiles</h3>
                            <p className="text-muted mb-0">Configure each player and device individually. Quickly switch mics between players.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* Feature item */}
                        <div className="text-center  mb-5">
                            <i className="bi-gear icon-feature text-gradient d-block"></i>
                            <h3 className="font-alt">Made with Unity</h3>
                            <p className="text-muted mb-0">Built on a professional game engine and modern tools to provide the best experience for developers and users.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* Feature item */}
                        <div className="text-center  mb-5">
                            <i className="bi-code icon-feature text-gradient d-block"></i>
                            <h3 className="font-alt">Open Source</h3>
                            <p className="text-muted mb-0">UltraStar&nbsp;Play belongs to everyone. Get involved, add features, ideas, styles, or translations on <a href="https://github.com/UltraStar-Deluxe/Play">GitHub</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

)

export default FeaturesSection