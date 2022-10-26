// See https://locize.com/blog/next-i18n-static/
import languageDetector from '../../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

// @ts-ignore
const LanguageSwitcherLink = ({ locale, ...rest }) =>
{
    const router = useRouter()
    
    if (!locale)
    {
        return null;
    }

    let buttonLabel = locale;
    if (Intl
        && Intl.DisplayNames)
    {
        const languageNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'language' })
        const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' })
        const languagePart = locale.split("-")[0]
        const regionPart = locale.split("-")[1]
        buttonLabel = languageNamesInEnglish.of(languagePart)
        if (regionPart)
        {
            buttonLabel += ` (${regionNamesInEnglish.of(languagePart)})`
        }
    }

    let href = rest.href || router.asPath
    let pName = router.pathname
    Object.keys(router.query).forEach((k) =>
    {
        if (k === 'locale')
        {
            pName = pName.replace(`[${k}]`, locale)
            return
        }
        // @ts-ignore
        pName = pName.replace(`[${k}]`, router.query[k])
    })
    if (locale)
    {
        href = rest.href ? `/${locale}${rest.href}` : pName
    }

    return (
        <li>
            <Link className="dropdown-item" href={href}>
                <button className='btn' onClick={() => (languageDetector as any).cache(locale)}>
                    {buttonLabel}
                </button>
            </Link>
        </li>
    );
};

export default LanguageSwitcherLink