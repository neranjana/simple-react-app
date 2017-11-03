import React, { Component } from 'react';

class Child extends Component {
    // first and only function called when a new instance
    // of the class is created is the constructor
    constructor(props) {

        // calling the constructor of the parent Component class
        super(props);

        this.state = { inputValue: ''};
    }

    render() {
        return (
            <div className='child'>
                This is Child <br />
                <input onChange={this.onInputChange} />
                <br />
                {/* another way to do the same */}
                <input 
                    value={this.state.inputValue}
                    onChange={event => this.setState({ inputValue: event.target.value})} />
                {/* never use this.state=blah to assign state*/}
                <br />
                Value entered : {this.state.inputValue}
            </div>    
        );
    }

    // the parameter event can be named as anything. e.g. eventObject, etc.
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default Child;