import React from 'react'
import "./Hero.scss"
import heroImg from "../images/hero.png"

const Hero = () => (
  <section className="Hero" style={{backgroundImage: `url('.${heroImg}')`}}>
  </section>
)

Hero.propTypes = {};
Hero.defaultProps = {};

export default Hero;
