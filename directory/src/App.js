import React, { Component } from 'react';
import axios from 'axios';
import EmployeeCard from './Components/EmployeeCard';
import EmployeeInfo from './Components/EmployeeInfo';
import Info from './Components/Info';


import './App.css';

class App extends Component {

  state = {
    info: [],
    id: null,
    extraData: ''
  }

  componentDidMount(){

      axios.get('https://randomuser.me/api/?results=2')
        .then(response => { // .then() takes a function, that starts after data is recieved
            const info = response.data.results;
            this.setState( {info: info} )
            console.log(info);
        });

  }

  cardSelectedHandler = (id, arr) => {
    // name, img, gen, email
    // name: name, image: img, gender: gen, email:email
      this.setState({
        id: id, extraData:arr
      });

  }



  render() {

    const employees = this.state.info.map( att => {
        let name = att.name.first + ' ' + att.name.last;
        let image = att.picture.large;
        let email = att.email;
        let gender = att.gender;
        let arr = [];
        arr.push(image,email,gender,name, );
        console.log(arr);


        return <EmployeeCard
          image={image}
          name={name}
          key={att.login.uuid}
          clicked={() => this.cardSelectedHandler(att.login.uuid, arr)}
        />

    })




    return (
      <div className="App">

        <h1>Employee Directory</h1>
          {employees}
          <EmployeeInfo
            id={this.state.id}
            image={this.state.extraData[0]}
            name={this.state.extraData[3]}
            email={this.state.extraData[1]}
          />
          <Info />
      </div>
    );
  }
}

export default App;
