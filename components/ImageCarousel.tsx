import Image from "next/image";

const slides = [
    "img/carousel/DevicesWithLogo-resized.png",
    "img/carousel/singing-resized.jpg?version=2",
    "img/carousel/results-resized.jpg?version=2",
    "img/carousel/song-select-resized.jpg?version=2",
    "img/carousel/companion-app-resized.png?version=2",
]

const SlideIndicator = (props: {index: number}) => 
{
    return <button className={props.index === 0 ? 'active' : ''} type="button"
                   data-bs-target="#image-carousel" data-bs-slide-to={props.index}></button>
}

const SlideImage = (props: {index: number, path: string}) =>
{
    return <div className={`carousel-item ${props.index === 0 ? 'active' : ''}`} style={{textAlign: 'center'}}>
                <div className="image-container">
                    <Image src={props.path} alt="" layout="fill" objectFit="contain" />
                </div>
            </div>
}

const ImageCarousel = () => (
<>
    <div className="col-lg-6">
        <div id="image-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                { slides.map(slide => <SlideImage index={slides.indexOf(slide)} path={slide} />) }
            </div>
            <div className="carousel-indicators">
                { slides.map(slide => <SlideIndicator index={slides.indexOf(slide)} />) }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#image-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#image-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</>
)

export default ImageCarousel