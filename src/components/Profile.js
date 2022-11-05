import React from 'react'
import profile from "../assets/profile.jpg";
import { RiShareForwardLine } from "react-icons/ri"
import { BsThreeDots } from 'react-icons/bs';

const Profile = (props) => {
    const{mobile} = props
  return (
        <div className="profile">
          {mobile? <BsThreeDots className="dot"/> : <RiShareForwardLine className="share"/>}
          <img src={profile} className="profile-image" id="profile_img" alt="profile-image" />
          <h1 className="profile" id="twitter"> Ayanwale Sulaimon</h1>
          <h1 className="slack" id="slack" style={{display:"none"}}>sulaymon</h1>
        </div>
  )
}

export default Profile;