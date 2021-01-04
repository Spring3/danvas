import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, css } from 'styled-components';
import { CookieBanner } from './common/CookieBanner';
import 'normalize.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --text-color-primary: #282C36;
    --text-color-secondary: #767B91;
    --background-color: white;
    --background-color-dark: #f5f5f5;
    --shadow-color: #E0E0E0;
    --marker-green: #A9E5BB;
    --marker-yellow: #FCF6B1;
    --marker-red: #F78888;
    --marker-blue: #BCE5FF;
    --border-radius: 3px;
    --page-size: 45em;
    --color-red: #EF3934;
    --color-green: #44C95C;
    --color-yellow: #FFB402;
    --color-blue: #2F86EB;

  }

  body {
    font-size: 16px;
    background-color: var(--background-color);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    color: var(--text-color-primary);
  }

  main {
    padding: 0;
  }
`;

const fontScaling = css`
  font-weight: 1rem;

  @media (max-width: 750px) {
    font-weight: 0.8rem;
  }
`;

const OGP = memo(({ title, description, image }) => {
  if (window) {
    // eslint-disable-next-line
    window.__forceSmoothScrollPolyfill__ = true;
  }
  return (
    <>
      <Helmet>
        <meta property="og:site_name" content="www.dvasylenko.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <title>Daniyil Vasylenko</title>
      </Helmet>
      <CookieBanner />
    </>
  );
});

OGP.displayName = 'OGP';

export {
  GlobalStyles,
  fontScaling,
  OGP,
};
