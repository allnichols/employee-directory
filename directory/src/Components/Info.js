import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
  state = {
    data:[]
  }

  componentDidMount(){

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => { // .then() takes a function, that starts after data is recieved
            const data = response.data;
            this.setState( {data: data} )
            console.log(data);
        });

  }

  render(){
    return <p> Hello </p>
  }

}
export default Info;
