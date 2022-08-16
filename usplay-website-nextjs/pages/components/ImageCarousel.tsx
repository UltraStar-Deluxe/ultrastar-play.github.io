const ImageCarousel = () => (
<>
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
</>
)

export default ImageCarousel