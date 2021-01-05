import React, { useCallback, useEffect, useState } from 'react'

import styles from './styles/next-section.module.css'

// tslint:disable-next-line: no-var-requires
const ArrowDown = require('../icons/long-arrow-alt-down-solid.svg')

export const NextSection = ({ href, sectionName }) => {
  const [hidden, setHidden] = useState(false)

  const scrollFn = useCallback(() => {
    if (!hidden && window.scrollY > 600) {
      setHidden(true)
    } else if (window.scrollY < 600) {
      setHidden(false)
    }
  }, [hidden])

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => window.removeEventListener('scroll', scrollFn)
  }, [hidden])

  return (
    <div className={styles.next}>
      {hidden ? (
        <></>
      ) : (
        <a href={href}>
          <ArrowDown />
          <p>{sectionName}</p>
        </a>
      )}
    </div>
  )
}
