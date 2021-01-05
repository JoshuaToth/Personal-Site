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
    <a href="https://www.linkedin.com/in/joshua-toth-aab7b8b0" target="_blank">
      LinkedIn
    </a>
    <a href="https://twitter.com/TothJoshuaJ" target="_blank">
      Twitter
    </a>
    <a href="https://medium.com/@tothjoshuaj" target="_blank">
      Medium
    </a>

    <h3>Want to have a peek at some of my personal projects?</h3>
    <a href="https://github.com/JoshuaToth" target="_blank">
      Github
    </a>

    <h3>Want to play some video games?</h3>
    <a href="https://steamcommunity.com/id/valdura" target="_blank">
      Steam
    </a>
    <a href="https://discordapp.com/users/" target="_blank">
      Discord
    </a>
    <h3>Want to voice a complaint?</h3>
    <a href="mailto:josh+ignored-emails@jjt.dev" target="_blank">
      josh+ignored-emails@jjt.dev
    </a>
  </div>
)
