// See https://github.com/i18next/next-language-detector/tree/main/examples/basic
module.exports = {
    debug: true,
    // debug: process.env.NODE_ENV === 'development',
    // reloadOnPrerender: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh'],
        localeExtension: 'yml',
    },
    // Reload translation properties when page is refreshed in developer mode
    reloadOnPrerender: true,
    // Run initReactI18next implicitly
    react: {
        useSuspense: false
    },
}
