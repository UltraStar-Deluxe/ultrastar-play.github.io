const SongEditorSection = () => (

<section className="bg-light">
    <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-8">
                <h2 className="display-4 mb-4 font-alt">Create your own songs</h2>
                <div className="lead text-muted">The integrated <b>song editor</b> allows to easily create a sing-along version of any song, for example
                    <ul className="lead text-muted">
                        <li>Current top hits</li>
                        <li>TV series intro</li>
                        <li>Video game music</li>
                        <li>Romantic duets</li>
                        <li>Music from your region</li>
                        <li>&hellip;</li>
                    </ul>
                </div>
                
                <p className="lead text-muted">Add notes by singing or button tapping, edit notes via drag and drop,
                    change lyrics, copy&paste notes, import MIDI files, edit song properties, and many more!</p>

                <p className="lead text-muted">Checkout the <a href="https://www.youtube.com/watch?v=osKizOyXYFQ">video</a>
                    or <a href="https://github.com/UltraStar-Deluxe/Play/wiki/Song-Editor">documentation</a> for details.</p>
            </div>
            <div className="col-4 d-none d-lg-block">
                <img src="img/female-1299085_640.png" style={{maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%"}}/>
            </div>
        </div>

        {/* YouTube video (song editor)  */}
        <div className="row gx-5 my-5 justify-content-center">
            <div className="col-lg-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/osKizOyXYFQ" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{maxWidth: "100%"}}></iframe>
            </div>
        </div>
    </div>
</section>

)

export default SongEditorSection