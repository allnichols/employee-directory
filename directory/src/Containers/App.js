import React, { Component } from 'react';
import axios from 'axios';
import EmployeeCard from '../Components/EmployeeCard';
// import EmployeeInfo from '../Components/EmployeeInfo';
import Modal from '../UI/Modal';
import Auxillary from '../hoc/Auxillary';
import styles from './App.module.css';

class App extends Component {

  state = {
    data: [],
    cardData: [],
    name:null,
    image:null,
    email:null,
    userId:null,
    userClicked: false
  }

  componentDidMount(){
      axios.get('https://randomuser.me/api/?results=10')
        .then(response => { // .then() takes a function, that starts after data is recieved
          let info = response.data.results;
          this.setState({
            data:info
          })
          console.log(info);
        });
  }


  cardSelectedHandler = (id, name, img, mail) => {
      this.setState({
        userId: id,
          name: name,
         image: img,
         email: mail,
         userClicked:true
      });
      console.log(id);
  }


  userClosedHandler = () => {
    this.setState({userClicked:false})
  }



  render() {
    let workers = this.state.data.map(data => {
      let name = data.name.first;
      let image = data.picture.medium;
      let email = data.email;
        return <EmployeeCard
            key={data.login.uuid}
            name={name}
            image={image}
            clicked={() => this.cardSelectedHandler(data.login.uuid, name, image, email)}
            />
    })



    return (
      <Auxillary>
        <div className="App">
          <h1>Employee Directory</h1>
          <Modal key={this.state.userId} show={this.state.userClicked}
          close={this.userClosedHandler}
          name={this.state.name}
          image={this.state.image}
          email={this.state.email} />

          <div className={styles.grid}>
              {workers}

          </div>
        </div>
      </Auxillary>
    );
  }
}

export default App;
