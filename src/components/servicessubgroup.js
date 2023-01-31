import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Our Mission',
    text:
      'To become a leading indigenous MEP consulting firm, focusing on building a team of skilled professionals, developing a reputation for excellent service, using latest technology, building industry networks and seeking new opportunities for growth.',
    list: [],
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Our Vision',
    text:
      'To become a firm that exemplifies innovation and consistently pushes the boundaries of excellence in MEP (mechanical, electrical, and plumbing) service delivery, by continuously researching and staying up-to-date with the latest industry trends and advancements in technology.',
    list: [],
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Core Values',
    text: 'Our Core values include:',
    list: [
      'Creativity',
      'Excellence',
      'Integrity',
      'Team work',
      'Innovation',
      'Courage',
    ],
  },
]

// export const products_url = 'https://course-api.com/react-store-products'

export const products_url = '/api/v1/list/'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
