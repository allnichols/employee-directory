import React, { Component } from 'react';
import axios from 'axios';
import EmployeeCard from './Components/EmployeeCard';
import EmployeeInfo from './Components/EmployeeInfo';



import './App.css';

class App extends Component {

  state = {
    data: [],
    userId:null
  }

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => { // .then() takes a function, that starts after data is recieved
          let info = response.data
          this.setState({data:info})
          console.log(info);
        });
  }

  cardSelectedHandler = (id) => {
      this.setState({  userId: id,  });
      console.log(id);
  }



  render() {
    let workers = this.state.data.map(data => {
        return <EmployeeCard
            key={data.id}
            name={data.name}
            clicked={() => this.cardSelectedHandler(data.id)}
            />

    })


    return (
      <div className="App">
        <h1>Employee Directory</h1>
            {workers}
            <EmployeeInfo
            id={this.state.userId}
            
              />
      </div>
    );
  }
}

export default App;
