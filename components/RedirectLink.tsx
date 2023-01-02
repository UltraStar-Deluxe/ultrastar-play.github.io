// See https://locize.com/blog/next-i18n-static/
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// @ts-ignore
const RedirectLink: any = ({ children, skipLocaleHandling, ...rest }) => {
  const router = useRouter()
  const locale = rest.locale || router.query.locale || ''

  let href = rest.href || router.asPath
  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale)
  }

  return (
    <>
      <Link {...rest} href={href}>
        {children}
      </Link>
    </>
  )
}

export default RedirectLink
