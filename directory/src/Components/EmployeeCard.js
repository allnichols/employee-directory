import React from 'react';
import styles from './card.module.css';

const employee = (props) =>  {
    return (

      <div className={styles.card} onClick={props.clicked}>
          <p> {props.name}</p>
        </div>

    )
};


export default employee;
