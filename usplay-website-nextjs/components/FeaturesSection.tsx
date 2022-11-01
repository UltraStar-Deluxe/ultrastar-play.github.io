import { useTranslation } from "next-i18next"
import { T } from "./T"
import WaveBackground from "./WaveBackground"

const FeatureItem = (props: {icon: string, title: string, children?: React.ReactNode}) => (
    <div className="col-md-6 col-lg-4">
        <div className="text-center mb-3">
            <i className={`${props.icon} icon-feature text-gradient d-block`}></i>
            <h3 className="font-alt">{props.title}</h3>
            <p className="text-muted mb-0">{props.children}</p>
        </div>
    </div>
)

const FeaturesSection = () =>
{
    const { t } = useTranslation("common")
    const tUnescaped = (i18nKey: string) => t(i18nKey, { escapeValue: false })

    return <>
    <section id="features" className="stage-and-audience-background text-white pt-5">
        <div className="container">
            <div className="row">
                {/* Feature overview */}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="display-5 font-alt"><T i18nKey="featuresSection_featureList_title"/></h1>
                    </div>
                </div>
                <div className="row md-justify-content-center lead">
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                            <li>{ t("featuresSection_featureList_1") }</li>
                            <li>{ t("featuresSection_featureList_2") }</li>
                            <li>{ t("featuresSection_featureList_3") }</li>
                            <li>{ t("featuresSection_featureList_4") }</li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                            <li>{ t("featuresSection_featureList_5") }</li>
                            <li>{ t("featuresSection_featureList_6") }</li>
                            <li>{ t("featuresSection_featureList_7") }</li>
                            <li>{ t("featuresSection_featureList_8") }</li>
                        </ul>
                    </div>
                </div>
    
                {/* YouTube video (game teaser)  */}
                <div className="row my-5 justify-content-center">
                    <div className="col-md-6">
                        <div className="youtube-video-container">
                            <iframe src="https://www.youtube.com/embed/4hXKOLafpDg"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
    
                {/* Imagine fun time */}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1>{ t("featuresSection_imagineList_title") }</h1>
                    </div>
                </div>
                <div className="row justify-content-center lead">
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                            <li>{ t("featuresSection_imagineList_1") }</li>
                            <li>{ t("featuresSection_imagineList_2") }</li>
                            <li>{ t("featuresSection_imagineList_3") }</li>
                            <li>{ t("featuresSection_imagineList_4") }</li>
                            <li>{ t("featuresSection_imagineList_5") }</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <WaveBackground flipX={false} flipY={true} colorFrom="#151515" colorTo="#151515" />
    
    <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <FeatureItem icon="bi-phone" title={ tUnescaped("featuresSection_featureCard_companionApp") }>
                            { tUnescaped("featuresSection_featureCard_companionApp_detail") }
                        </FeatureItem>
    
                        <FeatureItem icon="bi-people" title={ tUnescaped("featuresSection_featureCard_solosDuetsGroups") }>
                            { tUnescaped("featuresSection_featureCard_solosDuetsGroups_detail") }
                        </FeatureItem>
                        
                        <FeatureItem icon="bi-collection-play" title={ tUnescaped("featuresSection_featureCard_openSongFormat") }>
                            { tUnescaped("featuresSection_featureCard_openSongFormat_detail") }
                        </FeatureItem>
    
                        <FeatureItem icon="bi-tools" title={ tUnescaped("featuresSection_featureCard_songEditor") }>
                            { tUnescaped("featuresSection_featureCard_songEditor_detail") }
                        </FeatureItem>
    
                        <FeatureItem icon="bi-music-note-list" title={ tUnescaped("featuresSection_featureCard_playlistsAndFavorites") }>
                            { tUnescaped("featuresSection_featureCard_playlistsAndFavorites_detail") }
                        </FeatureItem>
    
                        <FeatureItem icon="bi-person-hearts" title={ tUnescaped("featuresSection_featureCard_audience") }>
                            { tUnescaped("featuresSection_featureCard_audience_detail" ) } 
                        </FeatureItem>
    
                        <FeatureItem icon="bi-link-45deg" title={ tUnescaped("featuresSection_featureCard_scoreMode") }>
                            { tUnescaped("featuresSection_featureCard_scoreMode_detail") }
                        </FeatureItem>
    
                        <FeatureItem icon="bi-file-earmark-person" title={ tUnescaped("featuresSection_featureCard_playerAndMicProfiles") }>
                            { tUnescaped("featuresSection_featureCard_playerAndMicProfiles_detail") }
                        </FeatureItem>
    
                        <FeatureItem icon="bi-controller" title={ tUnescaped("featuresSection_featureCard_controllerSupport") }>
                        { tUnescaped("featuresSection_featureCard_controllerSupport_detail") }
                        </FeatureItem>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
}

export default FeaturesSection