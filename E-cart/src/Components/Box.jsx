import React from 'react'
import Contentbox from './Contentbox'

const ContentArray = [
  {
    "image": "https://example.com/images/brass-diya.jpg",
    "name": "Brass Diya",
    "desc": "Traditional brass oil lamp used for daily aarti and festive puja rituals.",
    "price": 15.99
  },
  {
    "image": "https://example.com/images/ganesh-idol.jpg",
    "name": "Lord Ganesha Idol",
    "desc": "Auspicious resin idol of Lord Ganesha for home temple and new beginnings.",
    "price": 29.99
  },
  {
    "image": "https://example.com/images/pooja-thali.jpg",
    "name": "Pooja Thali Set",
    "desc": "Decorative stainless steel pooja thali with diya, kumkum holder, and bell.",
    "price": 24.99
  },
  {
    "image": "https://example.com/images/rudraksha-mala.jpg",
    "name": "Rudraksha Mala",
    "desc": "Sacred 108-bead rudraksha mala used for chanting and meditation.",
    "price": 19.99
  },
  {
    "image": "https://example.com/images/incense-sticks.jpg",
    "name": "Sandalwood Incense Sticks",
    "desc": "Fragrant agarbatti sticks ideal for daily prayers and spiritual ambiance.",
    "price": 6.99
  },
  {
    "image": "https://example.com/images/shankh.jpg",
    "name": "Sacred Shankh (Conch)",
    "desc": "Holy conch shell used during aarti and special Hindu ceremonies.",
    "price": 34.99
  },
  {
    "image": "https://example.com/images/kalash.jpg",
    "name": "Copper Kalash",
    "desc": "Traditional copper kalash used in griha pravesh, weddings, and puja rituals.",
    "price": 21.99
  },
  {
    "image": "https://example.com/images/camphor.jpg",
    "name": "Puja Camphor",
    "desc": "Pure camphor tablets for aarti and spiritual cleansing.",
    "price": 4.99
  },
  {
    "image": "https://example.com/images/haldi-kumkum.jpg",
    "name": "Haldi Kumkum Set",
    "desc": "Turmeric and vermilion set used for tilak and religious ceremonies.",
    "price": 8.99
  },
  {
    "image": "https://example.com/images/tulsi-mala.jpg",
    "name": "Tulsi Mala",
    "desc": "Sacred tulsi bead mala for chanting and devotion.",
    "price": 12.99
  }
]

const Box = () => {
  return (
    <div className='Box'>
      {ContentArray.map((product, idx) => {
        return <Contentbox key={idx} product={product} />;
      })}
    </div>
  )
}

export default Box
