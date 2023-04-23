import React from 'react';
import styles from "../styles/ActivitiesHomePage.module.css"
import ActivityPost from '@/components/activities/ActivityPost';
import MostWatched from '@/components/activities/MostWatched';
import ContactHomePage from '@/components/home/ContactHomePage';
import { getPost } from '@/lib/action';

export default function ActivitiesPage({posts}) {
  return (
    <>
      <div className='text-center text-4xl hover:text-5xl md:text-5xl md:hover:text-6xl text-white font-bold bg-cover' style={{backgroundImage: 'url(https://ecosmart.netlify.app/static/img/activities_page/titlebackground.jpg)', height: '115px'}}>
        <h1 className='py-7 ' style={{color: '#FCF5E5'}}>Hoạt động</h1>
      </div>
      <div className={styles.activities_container}>
        <div className={styles.activities_news}>
          {posts.map(post => {
            return <ActivityPost key={post.id} content={post.content} title={post.title} link={post.link} imageURL={post.imageURL} />
          })}
        </div>
        <MostWatched />
      </div>
      <ContactHomePage />
    </>
  )
}

export async function getStaticProps() {
  const {posts} = await getPost("published")
  return {props: {posts}}
}