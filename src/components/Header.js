import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
   <header className='header'>
    <section>
        <div>
            <h2 className='banner'>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Little Lemon is a small italian restaurant that creates food with passion since several years. Try it out!</p>
            <Link to="/booking"><button aria-Label='On Click'>Reserve Table</button></Link>
        </div>

        <div className='banner-img'>
            <img src={bannerImg} alt=''></img>
        </div>

    </section>

   </header>
  )
}

export default Header