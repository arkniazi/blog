import React from 'react'
import image1 from '../../assets/images/profile.jpg';
import anime from 'animejs';


const ProfileCard = () => (
<div className="profileCard" 
// onMouseEnter={e=>{
//         anime({
//                 targets: e.currentTarget,
//                 // scale: 1.1,
//                 easing: 'easeInOutExpo'
//             })
//       }}
//       onMouseLeave={e=>{
//         anime({
//             targets: e.currentTarget,
//             scale: 1,
//             delay:0
//         })
//       }}
      >
    <div className="p-card-image" >
        <img src={image1}></img>
    </div>
    <div className="p-card-body">
        <h2 className="p-card-header">Hello</h2>
        <p className="p-card-contact">+923021234567</p>
    </div>
</div>
)

export default ProfileCard