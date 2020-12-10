import React, { Component } from 'react';
import Person from './components/Person/Person';
import CharComp from './components/CharComp/CharComp';

class App extends Component {

  state = {
    expand: 0,
    list: '',
    input: '',
    inputLength: 0
  }

  handleButton = () => {
    console.log('clicked')
   
    // when button clicked, a list of assignment will show in CharComp
    if (this.state.expand === 0 ) {
      this.state.expand = 1;
      this.setState({
        list: [
          'Create an input field (in App component) with a change listener which outputs the length of the entered text below it(e.g in a paragraph)',
          'Create a new Component (=> Validation Component which  receives the text length as a prop',
          'inside the ValidationComponent, either output "Text too short" or "Text too long" dependingon the text length (min 5)',
          'Create another component (=> CharComponent) and style it ',
          'Render a list of CharComp where each Char receives a different letter of the entered text',
          'When you click a Char, it should be removed from entered Text'
        ]
      })
    } else {
      this.state.expand = 0;
      this.setState({
        list: ''
      })
    }

    console.log(this.state.expand)
    // const copyList = [...this.state.list]
    // console.log(copyList)
    
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      input: e.target.value,
      inputLength: e.target.value.length
    })
  }

  render() {

    return (
      <div>
        <h1>Welcome to my React App</h1>
        <Person toggle={this.state.expand} data={this.state.list} onClick={()=>this.handleButton()} />
        
        
        <ul>
            {[...this.state.list].map((e)=> {
            return (
            <li>{e}</li>
            )
          })}
        </ul>
        <hr />
        <h2>Solutions:</h2>
        Your Name:      <input onChange={(e)=>this.handleChange(e)} value={this.state.input}/>
        <br />        
        Character Length: {this.state.inputLength}
        {(this.state.inputLength < 5) ? 
          <h4>Not Enuf</h4> :
          <h3>Password Sufficient</h3>
        }

        <CharComp letter={this.state.input} /> 
      </div>
    )
  }
}

export default App;