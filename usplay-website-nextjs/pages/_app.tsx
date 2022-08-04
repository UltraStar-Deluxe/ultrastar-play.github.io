import '../styles/globals.css'
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
