import React, { Component } from 'react';

// Class Component called "PersonCard", passing props into "PersonCard"
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            ageTotal: props.age
        }
    }

    //Handles total age +1 on click (Birthday Button)
    handleClick = () => {
        this.setState({
            ageTotal: this.state.ageTotal + 1
        } )
    }

    //Handles rendering all PersonCard's
    render() {
        const {firstName, lastName, hairColor} = this.props;
        //Returns the JSX we want to see (Also added birthday button)
        return (
            <div> 
                <h2> {lastName}, {firstName} </h2>
                <p>Age: {this.state.ageTotal} </p>
                <p>Hair Color: {hairColor} </p>
                <button onClick={this.handleClick}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;