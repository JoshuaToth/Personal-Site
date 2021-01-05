import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import headerStyle from './styles/header.module.css'

const Header = ({ siteTitle }) => {
  const wrapperRef = useRef<HTMLElement>()
  const nameRef = useRef<HTMLHeadingElement>()
  const navRef = useRef<HTMLElement>()
  const [lastScrollPos, setLastScrollPos] = useState(-1)

  const scrollFn = useCallback(() => {
    if (lastScrollPos === -1) {
      setLastScrollPos(window.scrollY)
    } else {
      if (lastScrollPos < window.scrollY) {
        wrapperRef.current.classList.add(headerStyle.hidden)
      } else if (lastScrollPos > window.scrollY) {
        wrapperRef.current.classList.remove(headerStyle.hidden)
      }
      setLastScrollPos(window.scrollY)
    }

    if (window.scrollY > 300) {
      nameRef.current.classList.remove(headerStyle.hide)
    } else {
      0
      nameRef.current.classList.add(headerStyle.hide)
    }
  }, [lastScrollPos, wrapperRef])

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => window.removeEventListener('scroll', scrollFn)
  }, [lastScrollPos])

  return (
    <header className={headerStyle.wrapper} ref={wrapperRef}>
      <nav className={headerStyle.header} ref={navRef}>
        <h1
          ref={nameRef}
          className={`${headerStyle.headerH1} ${headerStyle.hide}`}
        >
          <a href="#intro" className={headerStyle.link}>
            {siteTitle}
          </a>
        </h1>
        <ul>
          <li>
            <a href="#work" className={headerStyle.link}>
              Work
            </a>
          </li>
          <li>
            <a href="#extras" className={headerStyle.link}>
              extras
            </a>
          </li>
          <li>
            <a href="#contact" className={headerStyle.link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
