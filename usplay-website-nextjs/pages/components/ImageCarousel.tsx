const slides = [
    "img/devices_usplay_platforms.png",
    "img/screenshots/singing-resized.png?version=2",
    "img/screenshots/results-resized.png?version=2",
    "img/screenshots/song-select-resized.png?version=2",
    "img/screenshots/companion-app-resized.png?version=2",
]

const SlideIndicator = (props: {index: number}) => 
{
    return <button className={props.index === 0 ? 'active' : ''} type="button" data-bs-target="#image-carousel" data-bs-slide-to={props.index}
                aria-current="true" aria-label={`Slide ${props.index}`}></button>
}

const SlideImage = (props: {index: number, path: string}) =>
{
    return <div className={`carousel-item ${props.index === 0 ? 'active' : ''}`}>
                <img src={props.path} style={{maxWidth: "100%", maxHeight: "100%", width: "600px", height: "100%"}} />
            </div>
}

const ImageCarousel = () => (
<>
    <div className="col-lg-6">
        <div id="image-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                { slides.map(slide => <SlideIndicator index={slides.indexOf(slide)} />) }
            </div>
            <div className="carousel-inner">
                { slides.map(slide => <SlideImage index={slides.indexOf(slide)} path={slide} />) }
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
                { slides.map(slide => <SlideIndicator index={slides.indexOf(slide)} />) }
            </div>
        </div>
    </div>
</>
)

export default ImageCarousel