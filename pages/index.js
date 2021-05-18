import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from "../Components/LandingPage/LandingPage"
import { initializeStore } from "../redux/store";
import { getCategories, getFeaturedJobs, getInternships} from "../redux/actions/ssr.actions";

import JB from "./jobgrid"
export default function Home() {
  return (
    <div className={`${styles.App} ${styles.root1}`}>
      {/* <JB></JB> */}
      <LandingPage/>
    </div>
  )
}
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getCategories());
  await dispatch(getFeaturedJobs());
  return { props: { initialReduxState: reduxStore.getState() } };
}