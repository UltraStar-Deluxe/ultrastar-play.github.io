import Image from "next/legacy/image"
import { useEffect } from "react"
import { setInnerHtml, useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"
import WaveBackground from "./WaveBackground"
import YouTubeVideo from "./YouTubeVideo"

const SongEditorSection = () =>
{
    const { t } = useTranslationUnescaped("common")

    const videoName = t("songEditorSection_furtherDocumentation_video");
    const documentationName = t("songEditorSection_furtherDocumentation_documentation");
    useEffect(() => 
    {
        setInnerHtml('songEditorSection_furtherDocumentation', t("songEditorSection_furtherDocumentation", {
            "videoLink": `<a href='/learn/song-editor'>${videoName}</a>`,
            "documentationLink": `<a href='/learn/song-editor'>${documentationName}</a>`,
        }))
    })

    return <>
    <WaveBackground colorFrom="#f6f7f8" colorTo="#f6f7f8" />

    <section id="song-editor" className="bg-light">
        <div className="container px-5" style={{marginTop: '-80px'}}>
            <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-0 col-lg-1"></div>
                <div className="col-12 col-md-3 align-self-stretch">
                    <div className="image-container" style={{width: "100%", height: "100%", borderRadius: "200px", overflow: "hidden"}}>
                        <Image src="/img/musician-664432.jpg" alt="musician" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="col col-lg-8">
                    <div className="display-3 font-alt"><T i18nKey="songEditorSection_title" /></div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-12 col-lg-8">
                    <h2 className="display-4 mb-4 font-alt"><T i18nKey="songEditorSection_subtitle" /></h2>
                    <p><T i18nKey="songEditorSection_p_1" /></p>
                    <p><T i18nKey="songEditorSection_p_2" /></p>

                    <div className="row" >
                        <div className="col-auto">
                            <p><T i18nKey="songEditorSection_afterFeatureList" /></p>
                            <p id="songEditorSection_furtherDocumentation">{ /* content set in useEffect */ }</p>
                        </div>
                    </div>
                </div>
                <div className="col-0 col-lg-4 align-self-stretch">
                    <div className="image-container" style={{width: "100%", height: "100%", borderRadius: "200px", overflow: "hidden"}}>
                        <Image src="img/female-1299085.svg" alt="woman singing" layout="fill" />
                    </div>
                </div>
            </div>

            {/* YouTube video (song editor)  */}
            {/* <div className="row my-5 justify-content-center">
                <div className="col-lg-6">
                    <YouTubeVideo src="https://www.youtube.com/embed/osKizOyXYFQ" containerId="song-editor-video" />
                </div>
            </div> */}
        </div>
    </section>
</>

}

export default SongEditorSection