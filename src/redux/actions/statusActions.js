import { START_LOADING , END_LOADING ,ALERT_ERROR} from "../actionTypes";

export const startLoading = () => ({ type: START_LOADING });
export const endLoading = () => ({ type: END_LOADING });
export const alertError = (errorStatus) => ({ type: ALERT_ERROR , payload: errorStatus });
