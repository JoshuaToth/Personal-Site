import { Link } from 'gatsby'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import styles from './styles/contact.module.css'

export const Contact = () => (
  <div className={styles.contactWrapper}>
    <h1>Get in touch</h1>
    <a href="mailto:josh@jjt.dev" target="_blank">
      <h2>josh@jjt.dev</h2>
    </a>

    <h3>Want to check out my socials?</h3>
    <Link to="https://www.linkedin.com/in/joshua-toth-aab7b8b0" target="_blank">
      LinkedIn
    </Link>
    <Link to="https://twitter.com/TothJoshuaJ" target="_blank">
      Twitter
    </Link>
    <Link to="https://medium.com/@joshua-toth" target="_blank">
      Medium
    </Link>

    <h3>Want to have a peek at some of my personal projects?</h3>
    <Link to="https://github.com/JoshuaToth" target="_blank">
      Github
    </Link>

    <h3>Want to play some video games?</h3>
    <Link to="https://steamcommunity.com/id/valdura" target="_blank">
      Steam
    </Link>
    <Link to="https://discordapp.com/users/" target="_blank">
      Discord
    </Link>
    <h3>Want to voice a complaint?</h3>
    <a href="mailto:josh+ignored-emails@jjt.dev" target="_blank">
      josh+ignored-emails@jjt.dev
    </a>
  </div>
)
