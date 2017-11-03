import React, { Component } from 'react';

import Child from './child';

import '../style/style.css'

class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                This is Parent
                <Child />
            </div>    
        );
    }
}

export default Parent;