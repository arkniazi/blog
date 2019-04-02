import React, { Component } from 'react';

class CusButton extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div style={{flex:1, flexDirection:'column',width:"120", height:"42", backgroundColor:'red', padding:8, margin:4}}>
                <text>{this.props.text? this.props.text :  "Button"}</text>
            </div>
        );
    }
}

export default CusButton;
