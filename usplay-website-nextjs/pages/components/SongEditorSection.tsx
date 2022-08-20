import WaveBackground from "./WaveBackground"

const SongEditorSection = () => (

<>
<WaveBackground colorFrom="#f6f7f8" colorTo="#f6f7f8" />

<section id="song-editor" className="bg-light">
    <div className="container px-5" style={{marginTop: '-80px'}}>
        <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-3">
                <img src="/img/musician-664432.jpg" style={{maxWidth: '400px', maxHeight: '100%', width: '100%', borderRadius: '200px', overflow: 'hidden'}}/>
            </div>
            <div className="col col-lg-8">
                <div className="display-3 font-alt">Have a weird taste in music? <span className="text-gradient">No&nbsp;problem!</span></div>
            </div>
        </div>
        <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-8">
                <h2 className="display-4 mb-4 font-alt">Create your own songs</h2>
                <div className="">
                    <p>The integrated <span className="bold text-gradient">SONG&nbsp;EDITOR</span> allows to easily create a sing-along version of any song.</p>
                    
                    <p>UltraStar&nbsp;Play&apos;s song editor combines features that previously required multiple tools.
                    Plus, you can quickly <span className="bold text-gradient">switch between editing and testing</span> your song.</p>

                    <div className="row" >
                        <div className="col-12 col-md-6">
                            <ul className="item-symbol-tools">
                                <li>Add notes by singing or button tapping</li>
                                <li>Edit notes via drag and drop</li>
                                <li>Change Lyrics</li>
                                <li>Change video offset</li>
                                <li>Edit song properties</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="item-symbol-tools">
                                <li>Copy&amp;paste notes</li>
                                <li>Import MIDI files</li>
                                <li>Assign notes to different players</li>
                                <li>Quality analysis and warnings</li>
                                <li>&hellip;and many more!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-auto">
                            <p>With all these features, creating a sing-along version for an UltraStar game <span className="bold text-gradient">has never been easier.</span></p>
                            <p>Checkout the <a href="https://www.youtube.com/watch?v=osKizOyXYFQ">video</a> or <a href="https://github.com/UltraStar-Deluxe/Play/wiki/Song-Editor">documentation</a> for details.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 d-none d-lg-block">
                <img src="img/female-1299085.svg" style={{maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%"}}/>
            </div>
        </div>

        {/* YouTube video (song editor)  */}
        <div className="row my-5 justify-content-center">
            <div className="col-lg-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/osKizOyXYFQ" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{maxWidth: "100%"}}></iframe>
            </div>
        </div>
    </div>
</section>
</>
)

export default SongEditorSection