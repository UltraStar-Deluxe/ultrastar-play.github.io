import type { NextPage } from 'next'
//import { Button } from 'react-bootstrap'
//import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

<>
    {/* Navigation */}
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
            <a className="navbar-brand fw-bold" href="#page-top">UltraStar&nbsp;Play</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li className="nav-item"><a className="nav-link me-lg-3 active" href="#page-top">Home</a></li>
                    <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Features</a></li>
                    <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Download</a></li>
                    <li className="nav-item"><a className="nav-link me-lg-3" href="PrivacyPolicy">Privacy Policy</a></li>
                    <li className="nav-item"><a className="nav-link me-lg-3" href="https://github.com/UltraStar-Deluxe/Play">GitHub</a></li>
                </ul>
            </div>
        </div>
    </nav>
    {/* Mashead header */}
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
    {/* Quote/testimonial aside */}
    <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xl-8">
                    <div className="h2 fs-1 text-white font-alt">Sing your favorite songs</div>
                    <div className="h2 fs-3 text-white font-alt">There are thousands of community created songs in the UltraStar format on the internet.</div>
                </div>
            </div>
        </div>
    </aside>
    {/* App features section */}
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
    {/* Basic features section */}
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
    {/* Call to action section */}
    <section className="cta py-5">
        <div className="cta-content">
            <div className="container px-5">
                <h2 className="text-white display-1 lh-1 mb-4 font-alt">More to Come</h2>
                <ul className="text-white fs-4 font-alt">
                    <li>Party modes</li>
                    <li>Medleys</li>
                    <li>Online multiplayer</li>
                    <li>Song queue</li>
                    <li>Downloadable themes</li>
                    <li>&hellip;</li>
                </ul>
            </div>
        </div>
    </section>
    {/* App badge section */}
    <section className="" id="download">
        <div className="container px-5">
            <h2 className="text-center font-alt mb-4">Download Pre-Release</h2>
            {/* Buttons  */}
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-center">
                <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px;"}}>Get UltraStar&nbsp;Play</a>
                <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px;"}}>Get Companion&nbsp;App</a>
            </div>
        </div>
    </section>
    {/* Footer */}
    <footer className="bg-black text-center py-4">
        <div className="container-fluid px-5">
            <div className="col-12 d-flex flex-row fs-4" style={{justifyContent: "space-between"}}>
                <div className="fw-bold text-muted font-alt" aria-hidden="true">UltraStar&nbsp;Play</div>
                <div className="container" style={{textAlign: "right"}}>
                    <a href="https://github.com/UltraStar-Deluxe/Play" className="mx-2">
                        <i className="bi bi-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://discord.gg/PAUJFKCGbb" className="mx-2">
                        <i className="bi bi-discord" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCr481bd1jFp5d9wixQecwVw" className="mx-2">
                        <i className="bi bi-youtube" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/UltraStar_Play" className="mx-2">
                        <i className="bi bi-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/UltraStar-Play-101984782475359" className="mx-2">
                        <i className="bi bi-facebook" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    {/* Bootstrap core JS */}
    <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
    {/* Visitor Statistics by Clicky.com  */}
    <script async src="//static.getclicky.com/101369458.js"></script>
</>

  )
}

export default Home
