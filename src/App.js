// import React, { Component } from "react";
// import Person from "./components/Person/Person";

// class App extends Component {
//   state = {
//     persons: [
//       { id:"sdaf", name: "Julio", age: 41 },
//       { id:"sfsd", name: "Mila", age: 33 }
//     ],
//     showPerson: false,
//   };

//   onChange = (event, id) => {
//     const personIndex = this.state.persons.findIndex((p) => {
//       return p.id === id
//     })

//     const person = {
//       ...this.state.persons[personIndex]
//     }
//     person.name = event.target.value

//     const persons = [...this.state.persons]
//     persons[personIndex] = person

    
//     this.setState({
//       persons: persons,
//     });
//   };

//   togglePerson = () => {
//     const doesShow = this.state.showPerson;
//     console.log("doesShow: " + this.state.showPerson)
//     this.setState({
//       showPerson: !doesShow
//     });
    
//   };

//   deletePerson = (i) => {
//     // const persons = this.state.persons
//     const persons = [...this.state.persons];

//     persons.splice(i, 1);
//     this.setState({persons: persons})

//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursos: 'pointer'
//     }
//     let persons = null;

//     if ( this.state.showPerson ) {
//       console.log(persons)
//       persons = (
//         <div>{this.state.persons.map((e,i) => {
//           return <Person
//           click={() => this.deletePerson(i)}
//           // click={this.deletePerson.bind(this, i)}
//           name={e.name}
//           age={e.age}
//           key={e.id}
//           onChange={(event) => this.onChange(event, e.id)}
//         />
//         })}
            
//           </div>
//       )
//     }


//     return (
//       <div>
//         Welcome to my React App
        
          
        
//         <Person />
//         <button style={style} onClick={this.togglePerson}>Show something</button>
        
//         {persons}
//       </div>
//     );
//   }
// }

// export default App;



import React , { Component, setState } from 'react';
import Person from './components/Person/Person';
import CharComp from './components/CharComp/CharComp';

class App extends Component {
  state = {
    text:'',
    textLength:0
  }
  onChange = (event) => {
    console.log(event.target.value.length);

  
    this.setState({
      text: event.target.value,
      textLength: event.target.value.length
    })
  }

  onClick = () => {
    console.log('clicked')
    
  }

  deleteChar = (i) => {
    console.log('delete char', i)
    console.log(this.state.text[i])

    const newArr = [...this.state.text]
    console.log(newArr)
    newArr.splice(i,1)
    console.log(newArr)

    this.setState({
      text : newArr
    })
  
    

  }
 
  render () {

    const validateLength = () => {
    if (this.state.textLength < 5) {
        console.log('not enuf')
        return (
          <h1>Not Enough!!!!</h1>
        )
      }
    }
    const style = {
      display:"inline-block",
      padding:"20px",
      
        backgroundColor:'lightBlue',
        fontColor:'white',
        margin:'30px',
        fontSize:'20px',
        border:'10px solid black'
    }
    let chars = ''
    {
      if (this.state.textLength > 0 ) {
        // chars = [...this.state.text]
        chars = (
          <div>
            {[...this.state.text].map((e,i) => {
              return <CharComp letter={e} style={style} onClick={()=>this.deleteChar(i)}/>
            })}
          </div>
        )
        console.log(this.state.text)

        // return (
        //   <CharComp onClick={()=>this.deleteChar()} style={style} letter={this.state.text} />
        // )
      }

    }
   
    
    return (
      <div>
        <button onClick={this.onClick}>Click here for more</button>
        <Person 
        warning={validateLength()} 
        length={this.state.textLength} 
        text={this.state.text} 
        change={(event)=> this.onChange(event)} 
        />
      {/* <CharComp onClick={(event)=>this.deleteChar(event)} style={style}
      letter={this.state.text} /> */}
      {chars}

      
      </div>
    )
  }
}

export default App;