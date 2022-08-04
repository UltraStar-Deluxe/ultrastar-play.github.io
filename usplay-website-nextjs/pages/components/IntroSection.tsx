const IntroSection = () => (

<header className="masthead">
    <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
                {/* Mashead text and app badges */}
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                    <h1 className="display-1 lh-1 mb-3 font-alt">UltraStar&nbsp;Play</h1>
                    <p className="lead text-muted">Free and open source singing game for desktop and mobile.</p>
                    <p className="lead text-muted">The successor of UltraStar Deluxe, inspired by SingStar™.
                        The game plays a song, displays lyrics, notes, and a background video or image.
                        The players sing along and try to hit notes to earn points.</p>
                    <p className="lead text-muted mb">Available for Windows, MacOS, iOS, Android, and Linux.</p>
                    <p className="lead text-muted mb-5">Checkout the <a href="https://github.com/UltraStar-Deluxe/Play/wiki/First-Steps">wiki</a> to get started or <a href="https://discord.gg/PAUJFKCGbb">Discord</a> for help.</p>
                    
                    {/* Buttons */}
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px;"}}>Get UltraStar&nbsp;Play</a>
                        <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px;"}}>Get Companion&nbsp;App</a>
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
            <div className="col-lg-6">
                <div id="image-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/devices_usplay_platforms.png"
                                style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}} />
                        </div>
                        <div className="carousel-item">
                            <img src="img/screenshots/singing-resized.png?version=2"
                                style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}} />
                        </div>
                        <div className="carousel-item">
                            <img src="img/screenshots/results-resized.png?version=2"
                                style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}} />
                        </div>
                        <div className="carousel-item">
                            <img src="img/screenshots/song-select-resized.png?version=2"
                                style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}} />
                        </div>
                        <div className="carousel-item">
                            <img src="img/screenshots/companion-app-resized.png?version=2"
                                style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#image-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#image-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1">
                        </button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="1"
                            aria-label="Slide 2">
                        </button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="2"
                            aria-label="Slide 3">
                        </button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="3"
                            aria-label="Slide 4">
                        </button>
                        <button type="button" data-bs-target="#image-carousel" data-bs-slide-to="4"
                            aria-label="Slide 5">
                        </button>
                    </div>
                </div>
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
    </div>
</header>

)

export default IntroSection