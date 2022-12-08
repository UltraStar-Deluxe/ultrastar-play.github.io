import { useEffect } from "react"
import { getCookie, setCookie } from "../lib/cookieUtils"
import RedirectLink from "./RedirectLink"
import { T } from "./T"

const cookieBannerId = "cookie-notice"
const cookieBannerAcceptedCookieName = "cookieBannerAccepted"

const showCookieBanner = () =>
{
    const cookieBannerElement = document.getElementById(cookieBannerId)
    if (cookieBannerElement)
    {
        cookieBannerElement.style.display = ""
    }
}

const hideCookieBanner = () =>
{
    const cookieBannerElement = document.getElementById(cookieBannerId)
    if (cookieBannerElement)
    {
        cookieBannerElement.style.display = "none"
    }
}

const acceptAndHideCookieBanner = () =>
{
    setCookie(cookieBannerAcceptedCookieName, JSON.stringify(new Date()), 365)
    hideCookieBanner()
}

const CookieBanner = () => 
{
    useEffect(() => 
    {
        hideCookieBanner()
        const cookieBannerAcceptedDate = getCookie(cookieBannerAcceptedCookieName)
        if (!cookieBannerAcceptedDate)
        {
            showCookieBanner()
        }
    })

return (
    <div id={cookieBannerId} style={{ display: "none" }} className="cookie-notice-container text-muted">
        <div className="row justify-content-center mx-2 my-3 fw-bold fs-4">
            <div className="col col-auto">
                <span className="mx-1 fs-6">
                <T i18nKey="cookieBanner" />
                </span>

                <div onClick={acceptAndHideCookieBanner} className="btn btn-secondary mx-1"><T i18nKey="button_ok" /></div>
                <RedirectLink href="/PrivacyPolicy" target="_blank" className="btn btn-secondary mx-1"><T i18nKey="page_privacyPolicy" /></RedirectLink>
                <div onClick={hideCookieBanner} className="btn btn-link bi-x fs-4 text-muted"></div>
            </div>
        </div>
    </div>
)

}

export default CookieBanner