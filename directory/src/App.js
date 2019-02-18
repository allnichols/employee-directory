import React, { Component } from 'react';
import axios from 'axios';
import Employee from './Components/Employee';

import './App.css';

class App extends Component {

  state = {
    info: []
  }

  componentDidMount(){
      axios.get('https://randomuser.me/api/?results=3')
        .then(response => { // .then() takes a function, that starts after data is recieved

            const info = response.data.results;
            this.setState( {info: info} )

        });

  }

  render() {

    const data = this.state.info.map( att => {
        return <Employee
          image={att.picture.large}
          firstName={att.name.first}
          lastName={att.name.last}
          email={att.email}
        />
    })

    return (
      <div className="App">

        <h1>Employee Directory</h1>
        {data}

      </div>
    );
  }
}

export default App;
