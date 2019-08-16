import React, {Component} from 'react'
import './App.css'
import Radium from'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'qwert', name: 'Naruto', age: 20},
      {id: 'asdfg', name: 'Sasuke', age: 20},
      {id: 'zxcvb', name: 'Sakura', age: 20}
    ], 
    otherState: 'some other value',
  }

  toggleHandler = () => {
    const showOrNot = this.state.showPersons
    this.setState({
      showPersons: !showOrNot
    })
  }

  deletePersonHandler(personIndex) {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  inputNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    }) 

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'Pointer'
    }

    let persons = null

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={e => this.inputNameHandler(e, this.person.id)}/>
          })}
        </div>
      )

      style.backgroundColor = 'red'
    }

    const classes = []

    if(this.state.persons.length <= 2) { 
      classes.push('red')
    }
    if(this.state.persons.length <= 1) { 
      classes.push('bold')
    }


    return( 
      <div className='App'>
        <h1>Hello World!</h1>
        <p className={classes.join(' ')} >Have lots of fun coding!</p>
        <button style={style} onClick={this.toggleHandler}>Toggle Name</button>
        {persons}
      </div>
    )
  }
}

export default Radium(App)
