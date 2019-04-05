import React from 'react'
import image1 from '../../assets/images/profile.jpg';


const ProfileCard = () => (
<div className="profileCard">
    <div className="p-card-image" >
        <img src={image1}></img>
    </div>
    <div className="p-card-body">
    <p className="p-card-header">Hello</p>
    <p className="p-card-contact">+923021234567</p>
    </div>
</div>
)

export default ProfileCard