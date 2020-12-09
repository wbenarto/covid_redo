import React , { Component } from 'react';
import Person from './components/Person/Person'

class App extends Component {
    state = {
        persons: [
            { name:"Kucing", age=15 },
            { name:"Anjing", age=18 }
        ]
    }

    handleClick = () => {
        this.setState({
            persons: [
                { name:'Tio', age:88 },
                { name:'Subing', age:41 }
            ]
        })
    }

    render() {



        return (
            <div>
                <h1>Welcome to my Class Component React App</h1>
                <button onClick={this.handleClick}>Click to change info</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            </div>
        )
    }
}

export default App;