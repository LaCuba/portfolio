import React, { useEffect, useState } from "react"
import styles from "./App.module.scss"

const App = () => {
  const [widthText, setWidthText] = useState<string>('330px')
  const [timout, setTimout] = useState<number>()

  useEffect(() => {
    if (widthText === '0px') {
      clearTimeout(timout)
      const timer = window.setTimeout(() => setWidthText('330px'), 800)
      setTimout(timer)
    } else if (widthText === '330px') {
      clearTimeout(timout)
      const timer = window.setTimeout(() => setWidthText('0px'), 2000)
      setTimout(timer)
    }
  }, [widthText])

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.photo}></div>
        <div className={styles.app}>
          <div className={styles.info}>
            <h2 className={styles.greeting}>HI THERE ! I'M</h2>
            <h1 className={styles.myName}>NICK ROMANOV</h1>
            <span className={styles.professionBox} style={{ width: widthText }}>
              <h2 className={styles.profession}>FRONTEND-DEVELOPER</h2>
            </span>
          </div>
          <div className={styles.aboutMeBlock}>
              <h2 className={styles.aboutMeBox}>
                <span className={styles.about} data-hover={"ABOUT"}>
                  ABOUT
                </span>
                <span className={styles.me} data-hover={"ME"}>
                  ME
                </span>
              </h2>
          </div>
          <div className={styles.portfolioBlock}>
              <h2 className={styles.portfolioBox}>
                <span className={styles.my} data-hover={"MY"}>
                  MY
                </span>
                <span className={styles.portfolio} data-hover={"PORTFOLIO"}>
                  PORTFOLIO
                </span>
              </h2>
          </div>
          <div className={styles.messageBlock}>
              <h2 className={styles.messageBox}>
                <span className={styles.get} data-hover={"GET"}>
                  GET
                </span>
                <span className={styles.inTouch} data-hover={"IN TOUCH"}>
                  IN TOUCH
                </span>
              </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
