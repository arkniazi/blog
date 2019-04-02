import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import image1 from '../../assets/images/profile.jpg';
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = () => (
  <Card
    image={image1}
    header='Abdul Rahman'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    // extra={extra}
  />
)

export default CardExampleCardProps