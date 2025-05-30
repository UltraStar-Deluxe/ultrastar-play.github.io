import { useTranslationUnescaped } from "../lib/utils";
import { T } from "./T";

const featureCards = [
  // Game features
  { icon: "bi-people", title: "featuresSection_featureCard_solosDuetsGroups" },
  { icon: "bi-person-hearts", title: "featuresSection_featureCard_audience" },
  { icon: "bi-link-45deg", title: "featuresSection_featureCard_scoreMode" },
  { icon: "bi-trophy", title: "featuresSection_featureCard_teamAndTournament" },
  { icon: "bi-fire", title: "featuresSection_featureCard_gameModifiers" },
  { icon: "bi-stack", title: "featuresSection_featureCard_songQueueAndMedleys" },
  { icon: "bi-cloud-check", title: "featuresSection_featureCard_onlineMultiplayer" },

  // Technical features
//   { icon: "bi-youtube", title: "featuresSection_featureCard_embeddedBrowser" },
  { icon: "bi-phone", title: "featuresSection_featureCard_companionApp" },
  { icon: "bi-mic", title: "featuresSection_featureCard_mics" },
  { icon: "bi-volume-up", title: "featuresSection_featureCard_micPlayback" },
  { icon: "bi-collection-play", title: "featuresSection_featureCard_openSongFormat" },
  { icon: "bi-code-slash", title: "featuresSection_featureCard_modding" },
//   { icon: "bi-plugin", title: "featuresSection_featureCard_asio" },
  { icon: "bi-camera", title: "featuresSection_featureCard_webcam" },
//   { icon: "bi-circle-square", title: "featuresSection_featureCard_vocalsSeparation" },
  { icon: "bi-music-note-list", title: "featuresSection_featureCard_playlistsAndFavorites" },
  { icon: "bi-file-earmark-person", title: "featuresSection_featureCard_playerAndMicProfiles" },
  { icon: "bi-search", title: "featuresSection_featureCard_searchAndFind" },
  { icon: "bi-tools", title: "featuresSection_featureCard_songEditor" },
//   { icon: "bi-chat-dots", title: "featuresSection_featureCard_speechRecognition" },
  { icon: "bi-brush", title: "featuresSection_featureCard_themes" },
  { icon: "bi-controller", title: "featuresSection_featureCard_controllerSupport" },
];


const FeatureItem = (props: {icon: string, title: string, children?: React.ReactNode}) => (
  <div className="col-md-6 col-lg-4">
      <div className="text-center mb-3">
          <i className={`${props.icon} icon-feature text-gradient d-block`}></i>
          <h3 className="font-alt">{props.title}</h3>
          <p className="text-muted mb-0">{props.children}</p>
      </div>
  </div>
)

const FeatureCardsSection = () =>
{
  const { t } = useTranslationUnescaped();

  return <>
    <section id="features">
      <div className="container">
        <div className="row align-items-center">
          <div className="container-fluid">
            <div className="row">
              {
                featureCards.map(featureCard =>
                  <FeatureItem icon={featureCard.icon} title={t(featureCard.title)}>
                    <T i18nKey={`${featureCard.title}_detail`} />
                  </FeatureItem>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default FeatureCardsSection