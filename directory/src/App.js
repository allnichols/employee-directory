import React, { Component } from 'react';
import axios from 'axios';
import EmployeeCard from './Components/EmployeeCard';
// import EmployeeInfo from './Components/EmployeeInfo';
// import Info from './Components/Info';


import './App.css';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => { // .then() takes a function, that starts after data is recieved
          let info = response.data
          this.setState({data:info})
          console.log(info);
        });
  }

  // cardSelectedHandler = (id, arr) => {
  //     this.setState({
  //       id: id,
  //     });
  //
  // }



  render() {
    let workers = this.state.data.map(data => {
        return <EmployeeCard
            name={data.name}
            />
    })


    return (
      <div className="App">
        <h1>Employee Directory</h1>
        {workers}
      </div>
    );
  }
}

export default App;
