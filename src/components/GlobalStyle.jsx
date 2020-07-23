import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import "normalize.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default createGlobalStyle`
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
    background-color: var(--background0-color);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    color: var(--text-color-primary);
  }

  a, a:visited {
    color: black;
    font-weight: 500;
    padding: 2px;
    background: linear-gradient(to bottom, transparent 0%, transparent 60%, var(--marker-blue) 60%, var(--marker-blue) 100%);
    transition: background ease .2s;
    text-decoration: none;

    &:hover,
    &:focus {
      background: var(--marker-blue);
    }
  }

  .thumbs {
    padding: 0 !important;
  }

  .thumbs-wrapper {
    margin: 20px 0px !important;
  }

  main {
    padding: 0;
  }
`

export const OGP = ({ title, description, image }) => (
  <Helmet>
    <meta property="og:site_name" content="www.dvasylenko.com" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <title>Daniyil Vasylenko</title>
  </Helmet>
)
