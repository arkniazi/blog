import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import image1 from '../../assets/images/profile.jpg';
import anime from 'animejs';

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = () => (
  <div className="tezzt" onMouseOver={e=>{
    anime({
          targets: e.currentTarget,
          translateX: 250,
          rotate: '1turn',
          backgroundColor: '#FFF',
          duration: 800
        })
  }}>
  <Card 
    image={image1}
    header='Abdul Rahman'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    // extra={extra}
  
  />
  </ div>
)

export default CardExampleCardProps