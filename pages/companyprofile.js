import React from 'react'
import { initializeStore } from "../redux/store";
const companyprofile = () => {
  return (
    <div>
      <h1>company profile page!</h1>
    </div>
  )
}

export default companyprofile
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getInternships());
  return { props: { initialReduxState: reduxStore.getState() } };
}