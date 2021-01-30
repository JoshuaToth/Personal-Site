import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styles from './styles/achievements.module.css'
import { LondonImage } from '../images/LondonImage'
import { HackathonImage } from '../images/HackathonImage'
import { AltNetImage } from '../images/AltNetImage'
import { DDDPresent } from '../images/DDDImage'

import './styles/carousel-overs.css'
import { Link } from 'gatsby'

interface Ach {
  title: string
  description: string
  image: any
  timeframe: string
  href?: string
  thumbnailText: string
}

const achs: Ach[] = [
  {
    title: 'Complete my 5th Contract',
    timeframe: '2018 - 2021',
    description: `Unearthing myself from a comfortable, fun, challenging job that felt like home was tough! I wanted to put myself out there and give contracting a shot. I had no idea if moving to London to contract to would work out or not. I thought I had what it took and I was out to prove myself. Thankfully it did and I was able to complete five total contracts! All were intentionally short to mid term, I wanted to make sure I didn't get too comfortable anywhere.`,
    image: LondonImage,
    href: '#work',
    thumbnailText: 'Contracting',
  },
  {
    title: 'Win my first public hackathon',
    timeframe: 'BCG Digital Ventures, 2019',
    description:
      'Utilising my idea, my 3 teammates and I worked tirelessly to produce AskPaul: A communication framework targeting youth on the verge of homelessness. By considering the needs and symptoms of unprepared homelessness, we were able to target a massive problem area. The solution we produced was intentionally branded to be un-accusatory and intended to be used by those who do not consider themselves homeless.',
    image: HackathonImage,
    thumbnailText: 'Hackathon',
  },
  {
    title: 'Alt.net - Host & Organiser',
    timeframe: '2016 - 2018',
    description:
      'I hosted and co-organised the Alt.net meetup in Melbourne. The meetup has around 2000 members with monthly sessions where one to three guest presenters talked about their passion: .Net. I enjoy being involved in the community and firmly believe this culture makes our profession awesome.',
    image: AltNetImage,
    thumbnailText: 'Alt.net',
  },
  {
    title: 'DDD - Organiser & Presenter',
    timeframe: '2016 - 2018',
    description:
      'After presenting a talk on Microservices at DDD Melbourne 2016 I decided to get involved with the community organisation. For the next couple years I was a several time presenter at DDD Nights as well as assisting in organising several DDD events.',
    image: DDDPresent,
    thumbnailText: 'DDD Melbourne',
  },
]

export const Achievements = () => (
  <div className={styles.achievementsWrapper}>
    <h1>What have I been up to?</h1>
    <h2>
      Where's a better place to show off some of the stuff I'm most proud of?
    </h2>
    <Carousel
      dynamicHeight
      infiniteLoop
      className={styles.carousel}
      showThumbs
      showIndicators={false}
      renderThumbs={() =>
        achs.map(ach => {
          return (
            <div className={styles.thumbnail}>
              <p>{ach.thumbnailText}</p>
            </div>
          )
        })
      }
    >
      {achs.map(ach => {
        const Imaage = ach.image
        return (
          <div className={styles.achItem}>
            <div className={styles.left}>
              <h2>{ach.title}</h2>
              <p>{ach.timeframe}</p>
              <p>{ach.description}</p>
            </div>
            <div className={styles.right}>
              <Link
                to={ach.href}
                target={!ach.href?.includes('') ? '_blank' : undefined}
              >
                <Imaage />
              </Link>
            </div>
          </div>
        )
      })}
    </Carousel>
  </div>
)
