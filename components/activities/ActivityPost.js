import React from "react"
import styles from "../../styles/ActivitiesHomePage.module.css"

export default function ActivityPost(props) {
  return (
    <>
        <div className={styles.content_block}>
          <div className={styles.content2} style={{borderTopLeftRadius: "5%", borderBottomLeftRadius: "5%"}}>
            <div className={styles.block_header}>
              <div className={styles.text1}>{props.title}</div>
            </div>
            <span className={styles.text2} dangerouslySetInnerHTML={{__html: props.content}}></span>
            <div>
              <a
                href={props.link}
                className={styles.text3}
              >
                Read More</a>
            </div>
          </div>
          <div className={styles.image2}>
            <img style={{borderTopRightRadius: "5%", borderBottomRightRadius: "5%"}}
              src={props.imageURL}
              className={styles.img}
              alt=""
            />
          </div>
        </div>
    </>
  )
}