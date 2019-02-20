import React, { Component} from 'react';
import axios from 'axios';
//first the id is checked in componentDidMount() function. A little bit after the response is calle dform the api
// But, the DOM re-renders before the data is completed loaded.
// Use a conditional that checks if there is an ID and shows a loading sign. Followed by a conditional to check if the state has been set. QUICK FIX!!!

class EmployeeInfo extends Component {

  state = {
    loadedData:null
  }

  componentDidUpdate(){
    if ( this.props.id ) {
        if ( !this.state.loadedData || (this.state.loadedData && this.state.loadedData !== this.props.id) ) {
          axios.get('https://jsonplaceholder.typicode.com/users?id=' + this.props.id)
          .then(response=> {
              this.setState( {loadedData: response.data} )
          });
        }
      }
    }


  render () {
    let info = <p>no data</p>;
      if(this.props.id) {
        info = <p>Loading!</p>;
      }
      if (this.state.loadedData) {
        info = (
               <div>
                  <p>{this.props.id}</p>
                  <p>{this.state.loadedData.name}</p>
                </div>
        );
      }
      return info

    }

}


export default EmployeeInfo;
