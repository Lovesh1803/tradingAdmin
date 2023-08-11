import {
  APIUrl,
  NetworkConfiguration,
} from "../../../network/NetworkConfiguration";
import { callAPI } from "../../../network/NetworkConnection";
import { ALL_CONTRACTS, LOADING, PENDING_CONTRACTS, PURCHASED_CONTRACTS } from "./types";

export const setLoading = (data) => ({
  type: LOADING,
  payload: data,
});

export const setAllContracts = (data) => ({
  type: ALL_CONTRACTS,
  payload: data,
});

export const setPurchasedContracts = (data) => ({
  type: PURCHASED_CONTRACTS,
  payload: data,
});

export const setPendingContracts = (data) => ({
  type: PENDING_CONTRACTS,
  payload: data,
});

export const fetchAllContracts = () => (dispatch) => {
  dispatch(setLoading(true));
  callAPI(APIUrl + NetworkConfiguration.ALL_CONTRACTS, "GET")
    .then((res) => {
      dispatch(setAllContracts(res.result));
    })
    .catch((err) => console.log("error: ", err))
    .finally(() => dispatch(setLoading(false)));
};

export const fetchPendingContracts = () => (dispatch) => {
  dispatch(setLoading(true));
  callAPI(APIUrl + NetworkConfiguration.PENDING_CONTRACTS, "GET")
    .then((res) => {
      dispatch(setPendingContracts(res.result));
    })
    .catch((err) => console.log("error: ", err))
    .finally(() => dispatch(setLoading(false)));
};

export const fetchPurchasedContracts = () => (dispatch) => {
  dispatch(setLoading(true));
  callAPI(APIUrl + NetworkConfiguration.PURCHASED_CONTRACTS, "GET")
    .then((res) => {
      dispatch(setPurchasedContracts(res.result));
    })
    .catch((err) => console.log("error: ", err))
    .finally(() => dispatch(setLoading(false)));
};
