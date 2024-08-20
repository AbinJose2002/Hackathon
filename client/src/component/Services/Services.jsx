import React from 'react'

const Services = () => {
  return (
    <div>
      <section id="our-services py-4">
        <div className="container">
            <h1 className='text-center py-5'>Our Services</h1>
            <div className="row py-5">
                <div className="col-md-6">
                    <div className="service">
                        <h2>Learn and Earn</h2>
                        <p>Our platform is designed to reward original thinking. By completing courses without the aid of AI tools, students can earn valuable tokens. These tokens can be used for various purposes within the platform or exchanged for other digital assets.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service">
                        <h2>Peer Review and Growth</h2>
                        <p>Engage with your peers through our robust peer review system. Evaluate your classmates' work and earn tokens for your valuable insights. This collaborative learning environment fosters critical thinking and personal growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
