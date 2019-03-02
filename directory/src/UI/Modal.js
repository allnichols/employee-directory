import React from 'react';
import styles from './Modal.module.css';


const modal = (props) => {

    return(

        <div className={styles.Modal} key={props.id} show={props.show}

             style={{display: props.show ? 'block' : 'none',
                     opacity: props.show ? '1' : '0'}}>

        <img src={props.image} alt="user"/>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <button onClick={props.close}>close</button>
      </div>

  )
}





export default modal;
