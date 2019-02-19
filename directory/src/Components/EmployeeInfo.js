import React from 'react';

const employeeinfo = (props) => {


if (props.id) {
  return <div>
            <img src={props.image} alt="person"/>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
 } else {
   return null;
 }

}


export default employeeinfo;
