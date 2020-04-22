import React, { Component } from 'react';

class counter extends Component {
constructor(props){
    super(props)
    this.state = {
        counter : 0 
    };
}

increment = () => {
    this.setState({
        count: this.state.count + 1
    })
};

decrement = () => {
    this.setState({
        count: this.state.count - 1
    })
}

    render() {
        return (
          <div>
            <p>Current count : {this.state.counter}</p>
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
          </div>
        );
        } 

}

export default counter;