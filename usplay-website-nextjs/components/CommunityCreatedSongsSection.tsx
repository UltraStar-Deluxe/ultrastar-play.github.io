import { useTranslation } from "next-i18next";
import { T } from "./T";
import WaveBackground from "./WaveBackground"

const SingIdeaEntry = (props: {title: string, image: string}) => 
{
    let size = '150px';

    return (
<div className="col col-md-4 d-flex flex-column justify-content-between align-items-center pb-5">
    <div className="fs-3 text-white font-alt">{props.title}</div>
    <img className="circle-image-cropped" style={{height: size, width: size}} src={props.image} />
</div>
)
}

const CommunityCreatedSongsSection = () => {

    const { t } = useTranslation("common")

    return <>
        <div id="community-created-songs">
        </div>

        <WaveBackground colorFrom="#0f0163" colorTo="#0f0163" />

        <section className="text-center py-0" style={{background: 'linear-gradient(0deg, #380a74, #0f0163)'}}>
            <div className="container px-md-5">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h1 className="display-3 text-white font-alt"><T i18nKey="communityCreatedSongs_title" /></h1>
                        <h3 className="text-white font-alt"><T i18nKey="communityCreatedSongs_subtitle" /></h3>
                    </div>
                </div>
            </div>

            <div className="container px-md-5">
                <hr className="bg-light"/>
                <div className="row">
                    <SingIdeaEntry title={ t("communityCreatedSongs_currentTopHits") } image="img/vinyl-2202325.png"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_filmAndTV") } image="img/animals-44569.svg"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_games") } image="img/controller-1784573.svg"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_vocaloid") } image="img/sing-570519.png"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_event") } image="img/halloween-6784081.jpg"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_regional") } image="img/chorus-5977187-cut.jpg"/>
                </div>
            </div>
        </section>

        <WaveBackground flipY={true} colorFrom="#380a74" colorTo="#380a74" />
    </>

}

export default CommunityCreatedSongsSection
