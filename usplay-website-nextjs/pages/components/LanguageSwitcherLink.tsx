// See https://locize.com/blog/next-i18n-static/
import languageDetector from '../../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

// @ts-ignore
const LanguageSwitcherLink = ({ locale, ...rest }) => {
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    // @ts-ignore
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  return (
    <Link href={href}>
      <button onClick={() => (languageDetector as any).cache(locale)}
              style={{ fontSize: 'small' }}>{locale}</button>
    </Link>
  );
};

export default LanguageSwitcherLink