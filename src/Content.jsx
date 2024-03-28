import React from 'react'
import './Content.css'

export const Content = () => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item-left">
          <img src="https://hips.hearstapps.com/hmg-prod/images/jan-1-2020-an-official-measures-a-rafflesia-flower-at-news-photo-1578584118.jpg" alt="" />
          <h2>The World's Largest Flower Absolutely</h2>
          <a className='author'><b>David Pazsko:</b></a>
          <time>2023-01-06 16:45</time>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et sint reiciendis velit sapiente laudantium reprehenderit hic dolorem, cupiditate facere asperiores eos nesciunt. Vero, iure pariatur? Reprehenderit deleniti voluptates vero!</p>
        </div>
        <div className="flex-item-left">
          <img src="https://images.squarespace-cdn.com/content/v1/543085c5e4b0e7143416ce20/1560687826609-L0KTCJC9TR8U1VOPT4O5/heron+_A8I7596.jpg" alt="" />
          <h2>Last call to save $1100 on Disrupt passes</h2>
          <a className='author'><b>Mary John:</b></a>
          <time>2023-01-06 16:45</time>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et sint reiciendis velit sapiente laudantium reprehenderit hic dolorem, cupiditate facere asperiores eos nesciunt. Vero, iure pariatur? Reprehenderit deleniti voluptates vero!</p>
        </div>
        <div className="flex-item-left">
          <img src="https://hips.hearstapps.com/hmg-prod/images/statue-of-captain-james-cook-against-blue-sky-copy-royalty-free-image-1710363634.jpg?resize=1200:*" alt="" />
          <h2>Long-Lost Shells From Captain Cook's </h2>
          <a className='author'><b>Suresh Babu:</b></a>
          <time> 2023-01-06 16:45</time>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et sint reiciendis velit sapiente laudantium reprehenderit hic dolorem, cupiditate facere asperiores eos nesciunt. Vero, iure pariatur? Reprehenderit deleniti voluptates vero!</p>
        </div>
      </div>
    </>
  )
}
