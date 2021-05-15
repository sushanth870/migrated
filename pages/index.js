import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from "./LandingPage"
import JB from "./Job_Grid"
export default function Home() {
  return (
    <div className={`${styles.App} ${styles.root1}`}>
      {/* <JB></JB> */}
      <LandingPage/>
    </div>
  )
}
