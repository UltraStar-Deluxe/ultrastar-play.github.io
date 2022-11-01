import LanguageSwitcher from './LanguageSwitcher';
import RedirectLink from './RedirectLink'
import { T } from './T';

const NavigationSection = () =>
{
    return <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
            <a id="navbar-title" className="navbar-brand fw-bold" href="#page-top">UltraStar&nbsp;Play</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li className="nav-item"><a className="nav-link me-lg-3 active" href="#page-top"><T i18nKey="navigationSection_home" /></a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle cursor-pointer" data-bs-toggle="dropdown"><T i18nKey="navigationSection_features" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#features"><T i18nKey="navigationSection_features_overview" /></a></li>
                            <li><a className="dropdown-item" href="#community-created-songs"><T i18nKey="navigationSection_features_community" /></a></li>
                            <li><a className="dropdown-item" href="#song-editor"><T i18nKey="navigationSection_features_songEditor" /></a></li>
                            <li><a className="dropdown-item" href="#cross-platform"><T i18nKey="navigationSection_features_crossPlatform" /></a></li>
                            <li><a className="dropdown-item" href="#open-source"><T i18nKey="navigationSection_features_openSource" /></a></li>
                            <li><a className="dropdown-item" href="#planned-features"><T i18nKey="navigationSection_features_plannedFeatures" /></a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link me-lg-3" href="#download"><T i18nKey="navigationSection_download" /></a></li>
                    <li className="nav-item"><RedirectLink className="nav-link me-lg-3" href="PrivacyPolicy"><T i18nKey="navigationSection_privacyPolicy" /></RedirectLink></li>
                    <li className="nav-item cursor-pointer"><LanguageSwitcher /></li>
                </ul>
            </div>
        </div>
    </nav>
    </>

}

export default NavigationSection;

////////////////////////////////////////////////////
// Open sub menu on hover
const unfoldNavItemOnHover = (element: Element) => 
{
    const doHide = (elementLink: Element | null) =>
    {
        if (!elementLink)
        {
            return;
        }

        let nextElement = elementLink.nextElementSibling;
        elementLink.classList.remove('show');
        if (nextElement)
        {
            nextElement.classList.remove('show');
        }
    }

    const doShow = (elementLink: Element | null) =>
    {
        if (!elementLink)
        {
            return;
        }

        let nextElement = elementLink.nextElementSibling;
        elementLink.classList.add('show');
        if (nextElement)
        {
            nextElement.classList.add('show');
        }
    }

    element.addEventListener('mouseover', function (this: Element, e)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doShow(elementLink);
    });

    element.addEventListener('mouseleave', function (this: Element, e: Event)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doHide(elementLink);
    })

    element.addEventListener('click', function (this: Element, e)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doHide(elementLink);
    });
}

if (typeof document !== "undefined" && document)
{
    document.addEventListener("DOMContentLoaded", () =>
    {
        if (window.innerWidth <= 992)
        {
            return;
        }

        document.querySelectorAll('.navbar .nav-item')
            .forEach((element) => unfoldNavItemOnHover(element));
    })
}
