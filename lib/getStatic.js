// See https://locize.com/blog/next-i18n-static
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'

export const getI18nPaths = () =>
    i18nextConfig.i18n.locales.map((lng) => ({
        params: {
            locale: lng
        }
    }))

export const getStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths()
})

export async function getI18nProps(locale, ns = ['common'])
{
    let props = {
        ...(await serverSideTranslations(locale, ns))
    }
    return props
}

export function makeStaticProps(ns = [], overrideLocale)
{
    return async function getStaticProps(ctx)
    {
        const locale = overrideLocale || ctx.params.locale
        return {
            props: await getI18nProps(locale, ns)
        }
    }
}
