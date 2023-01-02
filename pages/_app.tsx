import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Mulish, Kanit } from '@next/font/google'

// Load fonts
const mulish = Mulish({
    weight: '400',
    display: 'fallback',
})
const kanit = Kanit({
    weight: '400',
    display: 'fallback',
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
            }
        `}</style>

        <Component {...pageProps} />
    </>
}

export default appWithTranslation(MyApp)
