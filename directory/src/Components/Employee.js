import React from 'react';
import styles from './card.module.css';

const employee = (props) =>  {
    return (
      <div className={styles.card}>
          <img src={props.image} alt="person"/>
          <p> {props.firstName}  {props.lastName}</p>
          
        </div>
    )
};


export default employee;
