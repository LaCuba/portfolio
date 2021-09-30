import React from "react"
import styles from "./App.module.scss"

const App = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.photo}></div>
        <div className={styles.app}>
          <div className={styles.info}>
            <h2 className={styles.greeting}>HI THERE ! I'M</h2>
            <h2 className={styles.myName}>NICK ROMANOV</h2>
            <h2 className={styles.profession}>FRONTEND-DEVELOPER</h2>
          </div>
          <div className={styles.aboutMe}>
            <h2 className={styles.about}>ABOUT</h2>
            <h2 className={styles.me}>ME</h2>
          </div>
          <div className={styles.portfolio}>fasd</div>
          <div className={styles.message}>fasdf</div>
        </div>
      </div>
    </div>
  )
}

export default App
