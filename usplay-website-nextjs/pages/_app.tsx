import '../styles/globals.css'
import '../styles/google-font-Kanit.css'
import '../styles/google-font-Mulish.css'
import '../styles/google-font-Newsreader.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'

// The bootstrap import has issues when document is not defined (server side rendering maybe?)
if (typeof document !== "undefined")
{
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
