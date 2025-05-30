
import { useEffect } from 'react';
import { getCookie } from '../lib/cookieUtils';
import { acceptAndHideCookieBanner, cookieBannerAcceptedCookieName } from './CookieBanner';
import { T } from "./T"
import { createRoot } from 'react-dom/client';

const YouTubeVideoResolved = (props: { src: string }) =>
{
    return <div className='youtube-video-inner-container'>
        <iframe src={props.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
    </div>
}

const replaceVideoPlaceholderWithResolvedVideo = (containerId: string, src: string) =>
{
    const containerElement = document.getElementById(containerId);
    if (containerElement)
    {
        const youTubeVideoElement = <YouTubeVideoResolved src={src} />;
        if (youTubeVideoElement)
        {
            createRoot(containerElement).render(youTubeVideoElement)
        }
    }
    else
    {
        console.log("Cannot replace video placeholder because container element does not exist.")
    }
}

const YouTubeVideo = (props: { src: string, containerId: string }) =>
{
    useEffect(() =>
    {
        const cookieBannerAcceptedDate = getCookie(cookieBannerAcceptedCookieName)
        if (cookieBannerAcceptedDate)
        {
            replaceVideoPlaceholderWithResolvedVideo(props.containerId, props.src)
        }
        else
        {
            console.log("Cookies not accepted. Not replacing video placeholder.")
        }
    })

    return  (
        <div id={props.containerId} className="youtube-video-outer-container">
            <div className='youtube-video-placeholder bg-light p-3 d-flex justify-content-center' onClick={acceptAndHideCookieBanner}>
                <span className='youtube-video-placeholder-cookie-hint fs-4 text-muted bg-light'><T i18nKey='youTubeVideo_mustAcceptCookieHint' /></span>
            </div>
        </div>
    )
}

export default YouTubeVideo;