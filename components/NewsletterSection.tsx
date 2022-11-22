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
                    <input className="btn btn-primary blue-bg bg-gradient mb-2" type="submit" value={ t("newsletterSection_submit") }/>

                    {/* Hidden fields */}
                    {/* List token (get the token at: https://app.getresponse.com/campaign_list.html) */}
                    <input type="hidden" name="campaign_token" value="f4cR2" />
                    {/* Add subscriber to the follow-up sequence with a specified day (optional) */}
                    <input type="hidden" name="start_day" value="0" />
                </form>
            </div>
        </div>
    </section>
</>

}

export default NewsletterSection