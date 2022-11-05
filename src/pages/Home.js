import React from 'react'
import { SiSlack } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import Links from '../components/Links'
import Profile from '../components/Profile'

const Home = (props) => {
  const{mobile}= props
  return (
    <>
      <Profile mobile={mobile}/>
      <Links/>
      <div className="social-icons">
        <SiSlack/>
        <FaGithub/>
      </div>
    </>
  )
}

export default Home
