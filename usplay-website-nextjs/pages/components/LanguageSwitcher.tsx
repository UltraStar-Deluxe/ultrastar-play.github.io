// See https://locize.com/blog/next-i18n-static/
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import i18nextConfig from '../../next-i18next.config'
import LanguageSwitcherLink from "./LanguageSwitcherLink"

const LanguageSwitcher = () =>
{
    const router = useRouter()
    const { t } = useTranslation('common')
    const currentLocale = router.query.locale
                          || i18nextConfig.i18n.defaultLocale

    return (
        <div>
            <span style={{ lineHeight: '4.65em', fontSize: 'small' }}>{t('change_locale')}</span>
            {i18nextConfig.i18n.locales.map((locale) => {
                if (locale === currentLocale)
                {
                    // Do not create anything. No need to change to the same locale again.
                    return null
                }

                // Create link to change locale on click
                return (
                    <LanguageSwitcherLink
                        locale={locale}
                        key={locale}
                    />
                )
                })
            }
        </div>
    )
}

export default LanguageSwitcher