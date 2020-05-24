import React from 'react'
import Head from 'next/head'

/**
 * Add SEO tags to a page
 * @param {string} title - The title of the page
 * @param {string} description - The description of the page
 * @param {string} url - The canonical url of the page
 * @param {string} socialImage - The url to the image used on social media
 * @returns {HTMLElement} Head meta tags
 */
function SEO({
  title,
  description = 'A library of components made with Tailwind CSS to bootstrap your projects',
  url = '',
  socialImage = 'https://tailwind-starter-kit.now.sh/share.png',
}) {
  const pageTitle = title ? `${title} - Tailwind CSS Starter Kit` : 'Tailwind CSS Starter Kit'

  return (
    <Head>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://tailwind-starter-kit.now.sh/${url}`} />
      <meta name="author" content="Estevan Maito" />
      <meta name="robots" content="index" />

      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={socialImage} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://tailwind-starter-kit.now.sh/${url}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:url"
        content={`https://tailwind-starter-kit.now.sh/${url}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:creator" content="@estevanmaito" />

      <title>{pageTitle}</title>
    </Head>
  )
}

export default SEO
