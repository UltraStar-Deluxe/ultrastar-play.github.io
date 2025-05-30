import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Mulish, Kanit, Roboto, Inter } from '@next/font/google'

// Load fonts
const mulish = Mulish({
    weight: '400',
    display: 'fallback',
    subsets: ['latin', 'latin-ext']
})
const kanit = Kanit({
    weight: '400',
    display: 'fallback',
    subsets: ['latin', 'latin-ext']
})
const inter = Inter({
    weight: '400',
    display: 'fallback',
    subsets: ['latin', 'latin-ext']
})
const roboto = Roboto({
    weight: '400',
    display: 'fallback',
    subsets: ['latin', 'latin-ext']
})

// The bootstrap import has issues when document is not defined (server side rendering maybe?)
if (typeof document !== "undefined")
{
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
}

function MyApp({ Component, pageProps }: AppProps)
{
    return <>
        {/* Make loaded font families available in CSS as global variables */}
        <style jsx global>{`
            :root {
                --mulish-font: ${mulish.style.fontFamily};
                --kanit-font: ${kanit.style.fontFamily};
                --inter-font: ${inter.style.fontFamily};
                --roboto-font: ${roboto.style.fontFamily};
            }
        `}</style>

        <Component {...pageProps} />
    </>
}

export default appWithTranslation(MyApp)
