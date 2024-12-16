import React from 'react'
import "./Hero.scss"
import heroImg from "../images/hero.jpg"

const Hero = () => (
  <section 
    className="Hero" 
    style={{ backgroundImage: `url('.${heroImg}')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'top' }}
  >
  </section>
)

Hero.propTypes = {};
Hero.defaultProps = {};

export default Hero;
