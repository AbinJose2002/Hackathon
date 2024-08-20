import React from 'react'
import hero_img from '../../assets/pexels-yankrukov-8613312-removebg-preview.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='px-4 py-3'>
      <section className="hero-section d-flex flex-column align-items-center">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
                <img src={hero_img} alt="Hero Image" className="img-fluid" />
            </div>
            <div className="col-md-6 order-md-1">
                <h1 className='py-3'>AIM: Authenticity Insight Module</h1>
                <p className='py-3'>The Authenticity Insight Module(AIM) tool is an innovative addition to moder learning management system leveraging mern stack technoogy and blockchain to nehance academic integrity and secure onine education.</p>
                <button className='btn-hero'>Get Started</button>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Home
