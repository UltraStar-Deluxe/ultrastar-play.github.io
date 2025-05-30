import Image from "next/image"
import {  useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"

const NewsletterSection = () =>
{
    const { t } = useTranslationUnescaped()
    return <>
    <section id="newsletter" className="py-5 bg-light -stage-and-audience-background" style={{backgroundPosition: 'bottom'}}>
        <div className="row mx-5 justify-content-center">
            <div className="col-12 col-lg-5">
                {/* Title and subtitle */}
                <h1 className="bold font-alt align-self-center"><T i18nKey="newsletterSection_title" /></h1>
                <h2 className="align-self-center mb-3"><T i18nKey="newsletterSection_subtitle" /></h2>
            </div>
            <div className="col-12 col-lg-5">
                <form id="newsletterForm" action="https://app.getresponse.com/add_subscriber.html" acceptCharset="utf-8" method="post" target="_blank">
                    {/* Email field (required) */}
                    <input className="mb-3" type="text" name="email" placeholder={ t("newsletterSection_email_hint") } style={{width: '100%'}} />
                    
                    <br/>
                    
                    {/* Subscriber button */}
                    <input className="btn btn-primary bg-gradient mb-2" type="submit" value={ t("newsletterSection_submit") }/>

                    {/* Hidden fields */}
                    {/* List token (get the token in list settings: https://app.getresponse.com/campaign_list.html) */}
                    <input type="hidden" name="campaign_token" value="PZBDs" />
                    {/* Add subscriber to the follow-up sequence with a specified day (optional) */}
                    <input type="hidden" name="start_day" value="0" />
                </form>
            </div>

            {/* Buttons (Call to Action)  */}
            <div className="col-12 col-lg-5 mt-5">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="btn btn-lg mb-2" href="https://store.steampowered.com/app/2394070/Melody_Mania/" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/GitHub-DownloadButton.svg" layout="fill" objectFit="contain" alt="UltraStar Play on Steam button"/></a>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center">
                    <a className="btn btn-lg mb-2" href="https://play.google.com/store/apps/details?id=com.ultrastar.UltraStarPlayCompanion" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/Google_Play_Store_badge_companion_app.svg" layout="fill" objectFit="contain" alt="Companion App on Google Play button"/></a>
                    <a className="btn btn-lg mb-2" href="https://apps.apple.com/us/app/melody-mania-companion/id6476068878" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/AppleAppStore_CompanionAppBadge.svg" layout="fill" objectFit="contain" alt="Companion App on App Store button"/></a>
                </div>
            </div>
        </div>
    </section>
</>

}

export default NewsletterSection