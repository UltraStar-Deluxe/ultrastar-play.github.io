import RedirectLink from "./RedirectLink"
import SocialMediaLinks from "./SocialMediaLinks"
import { T } from "./T"

const FooterSection = () => (

<footer className="bg-black text-center py-4">
    <div className="row mx-5 fw-bold text-muted fs-4">
        <div className="col font-alt">
            UltraStar&nbsp;Play
        </div>
        <div className="col">
            <RedirectLink href="/PrivacyPolicy"><T i18nKey="footerSection_privacyPolicy" /></RedirectLink>
        </div>
        <div className="col">
            <SocialMediaLinks />
        </div>
    </div>
</footer>

)

export default FooterSection