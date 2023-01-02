import { useEffect } from "react"
import { deleteCookie, getCookie, setCookie } from "../lib/cookieUtils"
import RedirectLink from "./RedirectLink"
import { T } from "./T"

const cookieBannerId = "cookie-notice"
const cookieBannerAcceptedCookieName = "cookieBannerAccepted"
const cookieBannerDeclineNotNeededCookieName = "cookieBannerDeclineNotNeeded"

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
    deleteCookie(cookieBannerDeclineNotNeededCookieName);
    setCookie(cookieBannerAcceptedCookieName, JSON.stringify(new Date()), 365)
    hideCookieBanner()

    // Reload page. This will also load YouTube videos etc.
    location.reload();
}

const declineAndHideCookieBanner = () =>
{
    deleteCookie(cookieBannerAcceptedCookieName);
    setCookie(cookieBannerDeclineNotNeededCookieName, JSON.stringify(new Date()), 365)
    hideCookieBanner()
}

const CookieBanner = () => 
{
    useEffect(() => 
    {
        hideCookieBanner()
        const cookieBannerAcceptedDate = getCookie(cookieBannerAcceptedCookieName)
        const cookieBannerDeclineNotNeededDate = getCookie(cookieBannerDeclineNotNeededCookieName)
        if (!cookieBannerAcceptedDate && !cookieBannerDeclineNotNeededDate)
        {
            showCookieBanner()
        }
    })

return (
    <div id={cookieBannerId} style={{ display: "none" }} className="cookie-notice-container text-muted">
        <div className="row justify-content-center shadow-lg rounded bg-light pt-2 pb-2 m-3">
            <div className="col col-auto">
                <div className="mx-1 fs-5 mb-1">
                    <T i18nKey="cookieBanner_title" />
                </div>
                <div className="mx-1 fs-6 lh-sm mb-3">
                    <T i18nKey="cookieBanner_description" />
                </div>

                <div onClick={acceptAndHideCookieBanner} className="btn btn-primary bg-gradient mx-1 my-1"><T i18nKey="button_acceptAllCookies" /></div>
                <div onClick={declineAndHideCookieBanner} className="btn btn-primary bg-gradient mx-1 my-1"><T i18nKey="button_declineNotNeededCookies" /></div>
                <RedirectLink href="/PrivacyPolicy" target="_blank" className="btn btn-primary mx-1 my-1"><T i18nKey="page_privacyPolicy" /></RedirectLink>
            </div>
        </div>
    </div>
)

}

export { cookieBannerAcceptedCookieName, cookieBannerDeclineNotNeededCookieName, acceptAndHideCookieBanner };
export default CookieBanner