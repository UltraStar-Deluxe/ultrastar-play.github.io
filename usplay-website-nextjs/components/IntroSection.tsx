import ImageCarousel from "./ImageCarousel"
import Typewriter from "typewriter-effect"
import SocialMediaLinks from "./SocialMediaLinks"
import { useTranslation } from "next-i18next"
import { useEffect } from "react"
import { setInnerHtml } from "../lib/utils"
import { T } from "./T"

const IntroSection = () =>
{
    const { t } = useTranslation("common")

    const typewriterTexts = [
        t("introSection_typewriterText_1"),
        t("introSection_typewriterText_2"),
        t("introSection_typewriterText_3")
    ]
    
    const wikiName = t("introSection_wikiName");
    const discordName = t("introSection_discordName");
    useEffect(() => 
    {
        const wikiAndDiscordLink = t("introSection_wikiAndDiscord", {
            "wikiLink": `<a href='https://github.com/UltraStar-Deluxe/Play/wiki/First-Steps'>${wikiName}</a>`,
            "discordLink": `<a href='https://discord.gg/PAUJFKCGbb'>${discordName}</a>`,
        });
        setInnerHtml('wikiAndDiscordLink', wikiAndDiscordLink)
    })

    return <>
    <section className="masthead">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Mashead text and app badges */}
                    <div className="mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className="lh-1 mb-3 font-alt">{t("introSection_title")}</h1>
                        <div className="lead text-muted" style={{marginBottom: '1rem'}}>
                            { t("introSection_typewriterText_prefix") } <span className="emphasize"><Typewriter options={{autoStart: true, loop: true, strings: typewriterTexts, delay: 50}} /></span>
                        </div>
                        <p className="lead text-muted"><T i18nKey="introSection_p_1" /></p>
                        <p className="lead text-muted"><T i18nKey="introSection_p_2" /></p>
                        <p id="wikiAndDiscordLink" className="lead text-muted">{ /* content is set in useEffect */ }</p>

                        <div className="lead text-muted mb-5">{ t("introSection_follow_prefix" ) } <SocialMediaLinks /></div>

                        {/* Buttons */}
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px"}}><T i18nKey="button_getUltraStarPlay" /></a>
                            <a className="btn btn-primary btn-lg blue-bg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px"}}><T i18nKey="button_getCompanionApp" /></a>
                        </div>
                    </div>
                </div>

                <ImageCarousel />
            </div>
        </div>
    </section>
</>
}

export default IntroSection