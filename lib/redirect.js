// See https://locize.com/blog/next-i18n-static
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

const isAbsoluteUrl = (url) =>
{
    return url.startsWith('https://')
        || url.startsWith('http://')
}

export const useRedirect = (to) =>
{
    const router = useRouter()
    to = to || router.asPath

    useEffect(() =>
    {
        if (isAbsoluteUrl(to)
            // Do not redirect pages in 'learn' subfolder
            || to.includes('learn/'))
        {
            
            router.replace(to)
            return
        }

        // Language detection
        const detectedLng = languageDetector.detect()
        if (router.route === '/404'
            && to.startsWith('/' + detectedLng))
        {
            // Prevent endless loop
            router.replace('/' + detectedLng + router.route)
            return
        }

        // Add language to path
        languageDetector.cache(detectedLng)
        router.replace('/' + detectedLng + '/' + to)
    })
};

export const DefaultRedirect = () =>
{
    useRedirect()
    return <></>
}

// eslint-disable-next-line react/display-name
export const getCustomRedirect = (to) => () =>
{
    useRedirect(to)

    if (isAbsoluteUrl(to))
    {
        return <>
            <p>You should be redirected shortly. Otherwise, please follow <a href={to}>this link</a>.</p>
        </>
    }
    return <></>
}
