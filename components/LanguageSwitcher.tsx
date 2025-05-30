// See https://locize.com/blog/next-i18n-static/
import { useRouter } from 'next/router'
import i18nextConfig from '../next-i18next.config'
import LanguageSwitcherLink from "./LanguageSwitcherLink"

const LanguageSwitcher = () =>
{
    const router = useRouter()
    const currentLocale = router.query.locale
                          || i18nextConfig.i18n.defaultLocale

    return <>
        <div className="nav-link dropdown-toggle cursor-pointer" data-bs-toggle="dropdown">
          <span className="bi bi-translate">&nbsp;Language</span>
        </div>
        <ul className="dropdown-menu">
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
        </ul>
    </>
}

export default LanguageSwitcher