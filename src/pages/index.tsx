import React, { useCallback, useEffect, useRef } from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import styles from '../components/styles/layout.module.css'
import { Intro } from '../components/intro'
import { Work } from '../components/work'
import { Achievements } from '../components/achievements'
import { Contact } from '../components/contact'

const IndexPage = () => {
  const layoutRefBlue = useRef<HTMLDivElement>()
  const layoutRefRed = useRef<HTMLDivElement>()
  const layoutRefGreen = useRef<HTMLDivElement>()
  const layoutRefPurple = useRef<HTMLDivElement>()
  const introRef = useRef<HTMLDivElement>()
  const workRef = useRef<HTMLDivElement>()
  const extrasRef = useRef<HTMLDivElement>()
  const contactRef = useRef<HTMLDivElement>()

  const scrollFn = useCallback(() => {
    if (window.scrollY > contactRef.current.offsetTop - 600) {
      layoutRefBlue.current.classList.add(styles.layoutHidden)
      layoutRefRed.current.classList.add(styles.layoutHidden)
      layoutRefGreen.current.classList.add(styles.layoutHidden)
      layoutRefPurple.current.classList.remove(styles.layoutHidden)
    } else if (window.scrollY > extrasRef.current.offsetTop - 600) {
      layoutRefBlue.current.classList.add(styles.layoutHidden)
      layoutRefRed.current.classList.remove(styles.layoutHidden)
      layoutRefGreen.current.classList.add(styles.layoutHidden)
      layoutRefPurple.current.classList.add(styles.layoutHidden)
    } else if (window.scrollY > workRef.current.offsetTop - 600) {
      layoutRefBlue.current.classList.add(styles.layoutHidden)
      layoutRefRed.current.classList.add(styles.layoutHidden)
      layoutRefGreen.current.classList.remove(styles.layoutHidden)
      layoutRefPurple.current.classList.add(styles.layoutHidden)
    } else {
      layoutRefBlue.current.classList.remove(styles.layoutHidden)
      layoutRefRed.current.classList.add(styles.layoutHidden)
      layoutRefGreen.current.classList.add(styles.layoutHidden)
      layoutRefPurple.current.classList.add(styles.layoutHidden)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => window.removeEventListener('scroll', scrollFn)
  }, [])

  return (
    <div>
      <div className={styles.layoutBackgroundBlue} ref={layoutRefBlue}></div>
      <div
        className={`${styles.layoutBackgroundRed} ${styles.layoutHidden}`}
        ref={layoutRefRed}
      ></div>
      <div
        className={`${styles.layoutBackgroundGreen} ${styles.layoutHidden}`}
        ref={layoutRefGreen}
      ></div>
      <div
        className={`${styles.layoutBackgroundPurple} ${styles.layoutHidden}`}
        ref={layoutRefPurple}
      ></div>
      <Layout>
        <SEO title="Home" />
        <div ref={introRef} id="intro">
          <Intro />
        </div>
        <div ref={workRef} id="work">
          <Work />
        </div>
        <div ref={extrasRef} id="extras">
          <Achievements />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
