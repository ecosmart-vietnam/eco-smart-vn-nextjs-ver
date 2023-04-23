import React from "react"
import styles from "../../styles/ActivitiesHomePage.module.css"

export default function MostWatched() {
  return (
    <>
      <div className={styles["most-watched"]}>
        <p className={styles["mw-heading"]}>Xem nhiều</p>
        <div className={styles["mw-content"]}>
          
          <div className={styles["mw-content-block"]}>
            <img className={styles["mw-image"] + " " + styles["mw-child"] + " " + styles["img"]} src="https://ecosmart.netlify.app/static/img/activities_page/activities_page_14.jpg" alt=""/>
            <div className={styles["text1"] + " " + styles["mw-child"]}>CHECK YOUR MAIL!</div>
          </div>
        </div>
      </div> 
    </>
  )
}

