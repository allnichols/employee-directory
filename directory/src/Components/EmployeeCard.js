import React from 'react';
import styles from './card.module.css';

const employee = (props) =>  {
    return (

      <div className={styles.card} onClick={props.clicked}>
          <img src={props.image}/>
          <p> {props.name}</p>
        </div>

    )
};


export default employee;
