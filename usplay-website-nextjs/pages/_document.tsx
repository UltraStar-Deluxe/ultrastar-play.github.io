import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
<Html>
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>UltraStar&nbsp;Play - open source singing game</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        {/* Bootstrap icons */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
        {/* Core theme CSS (includes Bootstrap) */}
        <link href="css/styles.css" rel="stylesheet" />
        <link href="css/additional-styles.css" rel="stylesheet" />
    </Head>
    <body id="page-top">
        <Main />
        <NextScript />
    </body>
</Html>
    )
}
