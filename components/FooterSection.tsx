import Image from "next/legacy/image"
import RedirectLink from "./RedirectLink"
import SocialMediaLinks from "./SocialMediaLinks"
import { T } from "./T"

const FooterSection = () => (


<footer className="bg-black text-center py-4">

    <div className="row mx-5 fw-bold text-muted fs-4 align-items-center">
        {/* <div className="col">
            <Image src="/img/ASIO-compatible-logo-Steinberg-TM-BW.jpg" alt="musician" width="150" height="150" objectFit="contain" />
        </div> */}
        <div className="col font-alt">
            <RedirectLink className="mx-3" href="/">UltraStar&nbsp;Play</RedirectLink>
        </div>
        <div className="col">
            <RedirectLink className="mx-3" href="/PrivacyPolicy"><T i18nKey="page_privacyPolicy" /></RedirectLink>
        </div>
        <div className="col">
            <RedirectLink className="mx-3" href="/LegalNotice"><T i18nKey="page_legalNotice" /></RedirectLink>
        </div>
        <div className="col">
            <SocialMediaLinks />
        </div>
    </div>
</footer>

)

export default FooterSection