import React, { useEffect, useRef } from 'react'

import styles from './styles/work.module.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Hnb = require('../icons/hnb.svg')
const Floomx = require('../icons/floomx.svg')
const Acuris = require('../icons/acuris.svg')
const GFK = require('../icons/gfk.svg')
const PA = require('../icons/pa.svg')

interface Workplace {
  img: any
  workplace: string
  href: string
  workplaceDesc: string
  role: string
  project: string
  mainTech: string
}

const Pageup = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pageup.png" }) {
        childImageSharp {
          fluid(maxWidth: 168) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      alt="pageup logo"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

const WorkPlacement = ({ workplace, i }) => {
  const myRef = useRef<HTMLDivElement>()
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    let { current: currentObserver } = observer
    if (!currentObserver) {
      observer.current = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          console.log(myRef)
          myRef.current.classList.add(styles.appear)
          const { current: currentObserver } = observer
          currentObserver.disconnect()
        }
      })
    }
    currentObserver = observer.current
    currentObserver.disconnect()

    if (myRef.current) currentObserver.observe(myRef.current)

    return () => currentObserver.disconnect()
  }, [myRef])

  const Imgaa = workplace.img
  return (
    <div
      className={
        i % 2 === 0 ? styles.workplaceWrapper : styles.workplaceReverse
      }
      ref={myRef}
    >
      <Link to={workplace.href} target="_blank" className={styles.image}>
        <Imgaa />
      </Link>
      <div className={styles.details}>
        <Link to={workplace.href} target="_blank">
          <h3>{workplace.workplace}</h3>
        </Link>
        <p>{workplace.role}</p>
        <div className={styles.workArea}>
          <div>
            <p className={styles.detailHeading}>Workplace</p>
            <p>{workplace.workplaceDesc}</p>
          </div>
          <div>
            <p className={styles.detailHeading}>Project</p>
            <p>{workplace.project}</p>
          </div>
          <div>
            <p className={styles.detailHeading}>Main Tech</p>
            <p>{workplace.mainTech}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const workplaces: Workplace[] = [
  {
    img: GFK,
    workplace: 'Growth From Knowledge (gfk.com)',
    workplaceDesc: `GfK is Germany's largest market research institute, and the fourth largest market research organisation in the world`,
    role: 'Lead/Senior Developer',
    href: 'https://www.gfk.com/',
    project:
      'GFK Newron: a data analytics platform that supports sales and marketing leaders who need to track performance of their brand and product range.',
    mainTech:
      'Apollo - Express - Graphql - Highcharts - Node.js - React - Typescript',
  },
  {
    img: PA,
    workplace: 'PA Consulting/Aviva (paconsulting.com)',
    href: 'https://www.paconsulting.com/',
    workplaceDesc: `An innovation and transformation consultancy, we believe in the power of ingenuity to build a positive human future in a technology-driven world.`,
    role: 'Lead Developer.',
    project: `Aviva Penny: MVP of an IOT moneybox that required the setup of a bank account, the delivery of the device and the upkeen of the device's profile.`,
    mainTech:
      'AWS (Lambda, Cognito, DynamoDB, AWS Gateway) - Node.js - Terraform - Travis',
  },
  {
    img: Acuris,
    workplace: 'Acuris (acuris.com)',
    href: 'https://www.acuris.com/',
    workplaceDesc: `Acuris is a media company specialising in high-value content for financial professionals.`,
    role: 'Senior Developer.',
    project:
      'Acruis CMS: MVP of a state-of-the-art cms for Acuris internals to create, edit, audit and publish articles.',
    mainTech:
      'AWS - Docker - Golang - Node.js - React - Terraform - Travis - Typescript',
  },
  {
    img: Hnb,
    workplace: 'Holland & Barrett (hollandandbarrett.com)',
    href: 'https://www.hollandandbarrett.com/',
    workplaceDesc: `Holland & Barrett is a chain of health food shops with over 1,300 stores in 16 countries.`,
    role: 'Senior Developer.',
    project: 'Platform uplift: main retail site and homepage.',
    mainTech: 'GatsbyJS - Magnolia (CMS) - Node.js - React - Typescript',
  },
  {
    img: Floomx,
    workplace: 'Floom (floom.com)',
    href: 'https://www.floomx.com/',
    workplaceDesc: `Floom helps you send stunning flowers by local independent florists.`,
    role: 'Lead/Senior Developer.',
    project:
      'FloomX: MVP of a new B2B platform for the purchase and sale of florist supplies. Floom CMS: A platform for clients to design and deploy their own website using template components.',
    mainTech:
      'DatoCMS - Docker - GatsbyJS - Kubernetes - Node.js - Postgres - Prisma - Typescript',
  },
]

const aussieJobs: Workplace[] = [
  {
    img: () => (
      <div className={styles.pup}>
        <Pageup />
      </div>
    ),
    workplace: '2014 - 2018, PageUp (pageuppeople.com)',
    href: 'https://www.pageuppeople.com/',
    workplaceDesc: `PageUp is a pioneer HR software that streamlines recruitment, development and retention of talent.`,
    role: 'Junior developer -> Developer -> Senior developer.',
    project: `PageUp is where I honed myself as a developer. I worked on many projects in several different teams. I could talk for hours how much I loved the work and the people I worked with there. It was really an amazing journey.`,
    mainTech:
      '.Net (Classic ASP, Webforms, MVC, Web API) - Angular - AWS - Node - SASS',
  },
  {
    img: () => <p className={styles.om}>OM</p>,
    workplace: '2012 - 2014, ObjectMastery',
    href:
      'https://www.linkedin.com/company/objectmastery-pty-ltd/?originalSubdomain=au',
    workplaceDesc: `Now known as Integrated Application Development (IntegraDev), IntegraDev is dedicated to providing quality solutions for the financial services industry.`,
    role: 'Undergraduate developer.',
    project: `My undergraduate developer position where I experience my first foray into the web development world. I worked in several small projects, eventually leaving to continue my studies at university.`,
    mainTech: 'Delphi - SQL',
  },
]

export const Work = () => (
  <div className={styles.workWrapper}>
    <div className={styles.work}>
      <h1>My Work</h1>
      <h2>London, United Kingdom, Contracting 2018 - 2021</h2>
      <p>
        In 2018 I moved to London. I had the ambitious goal of working for four
        different companies in a contracting capacity. The idea was to work
        across very different development teams, on different products within
        different businesses. I wanted to get as much experience and perspective
        as I could. I'm excited to say I ended up working a total of 5 contracts
        at some very different workplaces: startup, consulting, enterprise, big
        data and retail.
      </p>
      {workplaces.map((workplace, i) => (
        <WorkPlacement workplace={workplace} i={i} />
      ))}
      <h2 className={styles.melbourne}>
        Melbourne, Australia, Full-Time, 2012 - 2018
      </h2>
      <p>
        Born and raised in Victoria, Australia I completed my Bachelor of ICT
        (Games development) at Swinburne University. After that I spent several
        years in the Melbourne tech scene before exploring internationally.
      </p>
      {aussieJobs.map((workplace, i) => (
        <WorkPlacement workplace={workplace} i={workplaces.length + i} />
      ))}
    </div>
  </div>
)
