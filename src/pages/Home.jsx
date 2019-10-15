import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'
import astronauts from '../images/astronauts.svg';
import LogoConf from '../images/logo-conf.svg';

const Home = () => {
  return (
    <div className="container-fluid h-100 Home__container">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-lg-6 Home__container-info">
            <img src={LogoConf} alt="" className="Home__container-conf-logo img-fluid"/>
            <h1 className="my-3 text-white">PRINT YOUR BADGES</h1>
            <p className="text-white">
              The easiest way to manage your conference
            </p>
            <Link className="btn btn-primary" to="/badges">
              Start now
            </Link>
          </div>
          <div className="col-12 col-lg-6 Home__container-astronaut">
            <img src={astronauts} alt="" className="Home__container-logo img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
