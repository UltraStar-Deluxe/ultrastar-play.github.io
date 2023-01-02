
import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { getCookie } from '../lib/cookieUtils';
import { useTranslationUnescaped } from "../lib/utils"
import { acceptAndHideCookieBanner, cookieBannerAcceptedCookieName } from './CookieBanner';
import { T } from "./T"

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
        const youTubeVideoElement =<YouTubeVideoResolved src={src} />;
        ReactDOM.render(youTubeVideoElement, containerElement)
    }
}

const YouTubeVideo = (props: { src: string }) =>
{
    const containerId = uuidv4()

    useEffect(() =>
    {
        const cookieBannerAcceptedDate = getCookie(cookieBannerAcceptedCookieName)
        if (cookieBannerAcceptedDate)
        {
            replaceVideoPlaceholderWithResolvedVideo(containerId, props.src)
        }
    })

    return  (
        <div id={containerId} className="youtube-video-outer-container">
            <div className='youtube-video-placeholder bg-light p-3 d-flex justify-content-center' onClick={acceptAndHideCookieBanner}>
                <span className='youtube-video-placeholder-cookie-hint fs-4 text-muted bg-light'><T i18nKey='youTubeVideo_mustAcceptCookieHint' /></span>
            </div>
        </div>
    )
}

export default YouTubeVideo;