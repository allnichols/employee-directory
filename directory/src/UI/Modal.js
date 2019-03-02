import React from 'react';
import styles from './Modal.module.css';


const modal = (props) => {

    return(

        <div className={styles.Modal} key={props.id} show={props.show}
             style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0'}}>

        <img src={props.image} alt="user"/>
        <p className={styles.Name}>{props.name}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <button onClick={props.close}>close</button>
      </div>

  )
}

export default modal;
