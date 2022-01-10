import React, { Component } from "react";

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fruit: ["banana", 'apple', 'orange', 'grape'], 
            newFruit: '' 
        };
        this.addFruit = this.addFruit.bind(this);
    }

    addFruit(event) {
        event.preventDefault();
        this.setState({
            fruit: [...this.state.fruit, this.state.newFruit],
            newFruit: '',
        });
        // console.log(this.fruit);
    }

    changeHandler(event) {
        this.setState({ newFruit: event.target.value });
        // console.log(this.fruit);
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <br/>
                    <h3>Fruit</h3>
                    <form onSubmit={this.addFruit}>
                        <input type='text' value={this.state.newFruit} onChange={(event) => this.changeHandler(event)}/>
                        <button type="submit">Add Fruit</button>
                    </form>
                    <FruitBowl fruits={this.state.fruit} />
                </div>
            </div>
        )
    }
}

class FruitBowl extends Component {
    render() {
        return (
            <div>
                {this.props.fruits.map((fruit) => {
                    return <Fruit passingFruit={fruit} />
                })}
            </div>
        )
    }
}

const Fruit = (props) => {
    return (
        <div>
            <h3>{props.passingFruit}</h3>
        </div>
    );
};
