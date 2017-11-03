import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div className='child'>
                This is Child <br />
                <input onChange={this.onInputChange} />
                <br />
                {/* another way to do the same */}
                <input onChange={event => console.log(event.target.value)} />
            </div>    
        );
    }

    // the parameter event can be named as anything. e.g. eventObject, etc.
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default Child;