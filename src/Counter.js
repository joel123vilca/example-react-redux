import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    increment =()=>{
        this.props.dispatch({ type: "INCREMENT"});
    };
    decrement =()=>{
        this.props.dispatch({ type: "DECREMENT"});
    };
    render(){
        return(
            <div>
                <h1>Counter</h1>
                <button onClick={this.decrement}>&ndash;</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
} 
const mapStateToProps = state => ({
    count: state.count
});
export default connect(mapStateToProps)(Counter);