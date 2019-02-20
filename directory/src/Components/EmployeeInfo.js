import React, { Component} from 'react';
import axios from 'axios';
//first the id is checked in componentDidMount() function. A little bit after the response is calle dform the api
// But, the DOM re-renders before the data is completed loaded.
// Use a conditional that checks if there is an ID and shows a loading sign. Followed by a conditional to check if the state has been set. QUICK FIX!!!

class EmployeeInfo extends Component {

  state = {
    loadedData:null
  }

  componentDidMount(){
    if ( this.props.id ) {
        if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response=> {
              this.setState( {loadedData: response.data} )
          });
        }
      }
    }


  render () {

    if (this.props.id && this.state.loadedData){
      return <p>{this.state.loadedDate}</p>
    } else{
      return <p>no data</p>
    }

    }
}


export default EmployeeInfo;
