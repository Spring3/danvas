import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GithubIcon from "mdi-react/GithubIcon"
import LinkedInIcon from "mdi-react/LinkedinIcon"
import TwitterIcon from "mdi-react/TwitterIcon"
import EmailOutlineIcon from "mdi-react/EmailOutlineIcon"
import SpotifyIcon from "mdi-react/SpotifyIcon"

const SocialButtonsList = styled.ul`
  margin: 0px;
  margin-top: 1rem;
  list-style-type: none;
  padding: 0px;
  display: flex;
  gap: 1rem;
  align-items: center;
`

const SocialButtonLink = styled.a`
  background: transparent;
  padding: 0px;
`

const OnlyImportantSocialButtons = ({ size }) => {
  return (
    <>
      <li>
        <SocialButtonLink
          href="https://github.com/Spring3"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon color="#333" size={size} />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink
          href="https://www.linkedin.com/in/dvasylenko/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon color="#0077b5" size={size} />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink
          href="mailto:daniyil.vasylenko@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <EmailOutlineIcon color="#ea4335" size={size} />
        </SocialButtonLink>
      </li>
    </>
  )
}

const SocialButtons = ({ size, onlyImportant }) => {
  if (onlyImportant) {
    return (
      <SocialButtonsList>
        <OnlyImportantSocialButtons size={size} />
      </SocialButtonsList>
    )
  }

  return (
    <SocialButtonsList>
      <OnlyImportantSocialButtons size={size} />
      <li>
        <SocialButtonLink
          href="https://twitter.com/dan_vasylenko"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon color="#1da1f2" size={size} />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink
          href="mailto:daniyil.vasylenko@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <EmailOutlineIcon color="#ea4335" size={size} />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink
          href="https://open.spotify.com/user/21vcdhgxp3gqinwau2aynzg7i?si=onT2d2-dTA-RqL7xHLI2Tw"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SpotifyIcon color="#1db954" size={size} />
        </SocialButtonLink>
      </li>
    </SocialButtonsList>
  )
}

SocialButtons.propTypes = {
  size: PropTypes.number,
  onlyImportant: PropTypes.bool,
}

SocialButtons.defaultProps = {
  size: 25,
}

export { SocialButtons }
