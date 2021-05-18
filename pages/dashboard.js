import React from 'react'
import { initializeStore } from "../redux/store";
const dashboard = () => {
  return (
    <div>
      <h1>dashboard page!</h1>
    </div>
  )
}

export default dashboard
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getInternships());
  return { props: { initialReduxState: reduxStore.getState() } };
}