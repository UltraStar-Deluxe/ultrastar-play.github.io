import WaveBackground from "./WaveBackground"

const SingIdeaEntry = (props: {title: string, image: string}) => 
{
    let size = '150px';

    return (
<div className="col col-md-4 d-flex flex-column justify-content-between align-items-center">
    <div className="fs-3 text-white font-alt">{props.title}</div>
    <img className="circle-image-cropped" style={{height: size, width: size}} src={props.image} />
</div>
)
}

const CommunityCreatedSongsSection = () => (

<>
    <WaveBackground colorFrom="#0f0163" colorTo="#0f0163" />

    <section className="text-center py-0" style={{background: 'linear-gradient(0deg, #380a74, #0f0163)'}}>
        <div className="container px-5">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="h2 fs-1 text-white font-alt">Sing your favorite songs!</div>
                    <div className="h2 fs-3 text-white font-alt">There are thousands of community created songs in the UltraStar format on the internet.</div>
                </div>
            </div>
        </div>

        <div className="container px-5">
            <hr className="bg-light"/>
            <div className="row">
                <SingIdeaEntry title="Sing current top hits" image="img/record-159211_1280.png"/>
                <SingIdeaEntry title="Sing the TV series intro from your childhood" image="img/animals-44569_1280.png"/>
                <SingIdeaEntry title="Sing amazing game soundtracks" image="img/headphones-6636989_1920.jpg"/>
                <SingIdeaEntry title="Sing your favorite Vocaloid and UTAU songs" image="img/sing-570519_1280.png"/>
                <SingIdeaEntry title="Sing at a convention or event" image="img/halloween-6784081_1920.jpg"/>
            </div>
        </div>
    </section>

    <WaveBackground flipY={true} colorFrom="#380a74" colorTo="#380a74" />
</>
)

export default CommunityCreatedSongsSection