import React, { Component } from 'react';
import Coverflow from 'react-coverflow';

// images 
import image1 from '../../assets/images/img11.png';
import image2 from '../../assets/images/img10.jpg';
import image3 from '../../assets/images/img9.jpg';
import image4 from '../../assets/images/img7.jpg';
import image5 from '../../assets/images/img1.jpg';
import image6 from '../../assets/images/img2.jpg';
import image7 from '../../assets/images/img3.jpg';
import image8 from '../../assets/images/img4.jpg';

class CoverFlowCarousel extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          activePic: 0
        };
    }

    handleClick() {
        this.setState({
            activePic: Math.random()
        });
    }

    render (){

        return (
            <div>
                <Coverflow 
                    width={960}
                    height={400}
                    displayQuantityOfSide={1}
                    navigation={true}
                    infiniteScroll={true}
                    enableHeading={false}
                    currentFigureScale={1.5} // this is the default value and can be changed
                    otherFigureScale={0.9} // default value is 0.8
                    active={this.state.activePic}
                    >
                    <div role="menuitem" tabIndex="0" style={{backgroundColor: '#eee'}}>
                        {/* you can include an image also as the background image */}
                    </div>
                    <img src={image1} alt='Pic 1' />
                    <img src={image2} alt='Pic 2' />
                    <img src={image3} alt='Pic 3' />
                    <img src={image4} alt='Pic 4' />
                    <img src={image5} alt='Pic 5' />
                    <img src={image6} alt='Pic 6' />
                    <img src={image7} alt='Pic 7' />
                    <img src={image8} alt='Pic 8' />
                </Coverflow>
            </div>
        )
    }
}

export default CoverFlowCarousel;