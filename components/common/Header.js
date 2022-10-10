import React from 'react';
import Head from 'next/head';
function Header({ title, pageTitle, pageDescription, pageKeywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />

      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content={`${
          pageDescription
            ? pageDescription
            : "Welcome, we hope you enjoy browsing through our online store. We offer many local artisan's one of a kind items and Aboriginal Coast Salish designed gift products;"
        }`}
      />
      <meta name='keywords' content={pageKeywords}></meta>
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={`${pageTitle ? pageTitle : 'Gift for everyone'}`}
      />
      <meta
        property='og:description'
        content={`${
          pageDescription
            ? pageDescription
            : "Welcome, we hope you enjoy browsing through our online store. We offer many local artisan's one of a kind items and Aboriginal Coast Salish designed gift products;"
        }`}
      />

      <meta property='og:url' content='' />
      <meta property='og:site_name' content='Handmade Gift Shop' />
      <meta
        property='og:image'
        content='../../assets/images/logo/whiteLogo.png'
      />
      <meta property='og:image:width' content='500' />
      <meta property='og:image:height' content='500' />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NJH9SVV');`,
        }}
      ></script> */}
    </Head>
  );
}

export default Header;
