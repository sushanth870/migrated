import React from 'react'
import { initializeStore } from "../redux/store";
const postintern = () => {
  return (
    <div>
      <h1>Postintern Page!</h1> 
    </div>
  )
}

export default postintern
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getInternships());
  return { props: { initialReduxState: reduxStore.getState() } };
}