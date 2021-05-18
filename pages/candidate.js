import React from 'react'
import { initializeStore } from "../redux/store";

const candidate = () => {
  return (
    <div>
      <h1>Candidate page!</h1>
    </div>
  )
}

export default candidate
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getSavedInternships());
  await dispatch(getAppliedInternships());
  return { props: { initialReduxState: reduxStore.getState() } };
}