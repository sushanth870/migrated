import { authConstants,getData, } from "../actionTypes";
import axios, { getCookie, setCookie } from "../helper_axios";
import AdminService from "../../AdminServices/AdminService";

export const getSavedInternships = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};
export const getAppliedInternships = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};
export const getApplicantsCompany = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};
export const getIntershipApply = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};
export const getIntershipBookmark = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};
export const getIntershipDetail = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};
export const getCompanyLocation = () => {
  return async (dispatch) => {
    dispatch({ type: getData.GETDATA_REQUEST });
    await AdminService.getUserProfile()
      .then((res) => {
        dispatch({
          type: getData.GETDATA_SUCCESS,
          payload: {
            ...res.data.results[0],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getData.GETDATA_FAILURE,
          payload: {
            message: "Error while accessing data!",
          },
        });
      });
  };
};