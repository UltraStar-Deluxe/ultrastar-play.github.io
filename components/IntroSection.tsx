import ImageCarousel from "./ImageCarousel"
import Typewriter from "typewriter-effect"
import SocialMediaLinks from "./SocialMediaLinks"
import { useEffect } from "react"
import { setInnerHtml, useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"
import Image from "next/image"

const IntroSection = () =>
{
    const { t } = useTranslationUnescaped("common")

    const typewriterTexts = [
        t("introSection_typewriterText_1"),
        t("introSection_typewriterText_2"),
        t("introSection_typewriterText_3")
    ]
    
    const wikiName = t("introSection_wikiName");
    const discordName = t("introSection_discordName");
    const faqName = t("introSection_faqName");
    useEffect(() => 
    {
        setInnerHtml('introSection_documentationAndHelpLinks', t("introSection_documentationAndHelpLinks", {
            // "wikiLink": `<a href='https://github.com/UltraStar-Deluxe/Play/wiki/First-Steps'>${wikiName}</a>`,
            // "faqLink": `<a href='https://github.com/UltraStar-Deluxe/Play/wiki/Frequently-Asked-Questions-(FAQ)'>${faqName}</a>`,
            "discordLink": `<a href='https://discord.gg/PAUJFKCGbb'>${discordName}</a>`,
        }))
    })

    return <>
    <section className="">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Mashead text and app badges */}
                    <div className="mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className="lh-1 my-3 font-alt"><T i18nKey="introSection_title" /></h1>
                        <div className="lead text-muted" style={{marginBottom: '1rem'}}>
                            <T i18nKey="introSection_typewriterText_prefix" />&nbsp;<span className="emphasize"><Typewriter options={{autoStart: true, loop: true, strings: typewriterTexts, delay: 50}} /></span>
                        </div>
                        <p className="lead text-muted"><T i18nKey="introSection_p_1" /></p>
                        <p className="lead text-muted"><T i18nKey="introSection_p_2" /></p>
                        <p id="introSection_documentationAndHelpLinks" className="lead text-muted">{ /* content is set in useEffect */ }</p>

                        <div className="lead text-muted mb-5"><T i18nKey="introSection_follow_prefix" /><SocialMediaLinks /></div>

                        {/* Buttons */}
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                            <a className="btn btn-lg mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/GitHub-DownloadButton.svg" layout="fill" objectFit="contain" alt="UltraStar Play on GitHub button"/></a>

                            <a className="btn btn-lg mb-2" href="https://play.google.com/store/apps/details?id=com.ultrastar.UltraStarPlayCompanion" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/Google_Play_Store_badge_companion_app.svg" layout="fill" objectFit="contain" alt="Companion App on Google Play button"/></a>
                            {/* <a className="btn btn-lg mb-2" href="https://apps.apple.com/us/app/melody-mania-companion/id6476068878" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/AppleAppStore_CompanionAppBadge.svg" layout="fill" objectFit="contain" alt="Companion App on App Store button"/></a> */}
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