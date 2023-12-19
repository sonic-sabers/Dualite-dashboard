import React from 'react'
import styles from "./Button.module.css";

const Button = (
  { onClick = () => { },
    title = 'hi', }
) => {
  return (
    <button onClick={onClick} className={styles["new-project-button"]}>
      <p>{title}</p>
    </button>
  )
}



export default Button