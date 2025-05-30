import Image from "next/legacy/image";

interface Slide
{
  path: string;
  priority?: boolean;
}

const slides: Slide[] = [
//   {
//     path: "/img/carousel/UltraStarPlay-MainCapsule-NoNotes.jpg",
//     priority: true
//   },
  {
    path: "/img/carousel/SonicRainboom-TwoPlayers-StaticNotes-SameLyrics.jpg"
  },
  {
    path: "/img/carousel/OnTheRun-TwoTeams-PassTheMic-StreamingNotes.jpg"
  },
  {
    path: "/img/carousel/TeamResults-FinalRound.jpg"
  },
  {
    path: "/img/carousel/smartphone-2354577-capp-recording.png"
  },
  {
    path: "/img/carousel/smartphone-2354577-capp-controls.png"
  },
  {
    path: "/img/carousel/SongEditor.jpg"
  }
]

const SlideIndicator = (props: { index: number }) => 
{
  return <button className={props.index === 0 ? 'active' : ''} type="button"
    data-bs-target="#image-carousel" data-bs-slide-to={props.index}></button>
}

const SlideImage = (props: { index: number, path: string, priority: boolean }) =>
{
  return <div className={`carousel-item ${props.index === 0 ? 'active' : ''}`} style={{ textAlign: 'center' }}>
    <div className="image-container">
      <Image src={props.path} alt="" layout="fill" objectFit="contain" priority={props.priority} />
    </div>
  </div>
}

const ImageCarousel = () => (
  <>
    <div className="col-lg-6">
      <div id="image-carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map(slide => <SlideImage key={slides.indexOf(slide)} index={slides.indexOf(slide)} path={slide.path} priority={!!slide.priority} />)}
        </div>
        <div className="carousel-indicators">
          {slides.map(slide => <SlideIndicator key={slides.indexOf(slide)} index={slides.indexOf(slide)} />)}
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