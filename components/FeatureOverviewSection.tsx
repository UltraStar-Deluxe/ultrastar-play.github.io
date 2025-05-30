import { useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"
import Video from "./Video"
import WaveBackground from "./WaveBackground"

const featureList = [
  "featuresSection_featureList_pitchDetection",
  "featuresSection_featureList_customSongs",
//   "featuresSection_featureList_embeddedBrowser",
  "featuresSection_featureList_companionApp",
  "featuresSection_featureList_scoreMode",
  // "featuresSection_featureList_duetSongs",

  "featuresSection_featureList_teamAndTournament",
  "featuresSection_featureList_songQueueAndMedleys",
  "featuresSection_featureList_playlists",
//   "featuresSection_featureList_vocalsSeparation",
  "featuresSection_featureList_deviceSupport",
]

const FeatureOverviewSection = () =>
{
    const { t } = useTranslationUnescaped()

    return <>
    <section id="overview" className="stage-and-audience-background text-white pt-5">
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
                            {
                                featureList.slice(0, featureList.length / 2).map(feature =>
                                    <li><T i18nKey={ feature } /></li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                        {
                            featureList.slice(featureList.length / 2, featureList.length).map(feature =>
                                <li><T i18nKey={ feature } /></li>
                            )
                        }
                        </ul>
                    </div>
                </div>
    
                {/* Game trailer  */}
                {/* <div className="row my-5 justify-content-center">
                    <div className="col-md-6">
                        <Video src="/videos/trailer-720p.mp4" />
                    </div>
                </div> */}
    
                {/* Imagine fun time */}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="display-5 font-alt"><T i18nKey="featuresSection_imagineList_title" /></h1>
                    </div>
                </div>
                <div className="row justify-content-center lead">
                    <div className="col-auto">
                        <ul className="item-symbol-mic">
                            <li><T i18nKey="featuresSection_imagineList_1" /></li>
                            <li><T i18nKey="featuresSection_imagineList_2" /></li>
                            <li><T i18nKey="featuresSection_imagineList_3" /></li>
                            <li><T i18nKey="featuresSection_imagineList_4" /></li>
                            <li><T i18nKey="featuresSection_imagineList_5" /></li>
                            {/* <li><T i18nKey="featuresSection_imagineList_embeddedBrowser" /></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <WaveBackground flipX={false} flipY={true} colorFrom="#151515" colorTo="#151515" />
    
    </>
}

export default FeatureOverviewSection