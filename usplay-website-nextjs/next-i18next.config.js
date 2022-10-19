// See https://github.com/i18next/next-language-detector/tree/main/examples/basic
module.exports = {
    debug: true,
    // debug: process.env.NODE_ENV === 'development',
    // reloadOnPrerender: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        localeExtension: 'yml',
    },
}
