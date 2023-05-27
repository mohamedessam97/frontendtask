import { START_LOADING, END_LOADING, ALERT_ERROR } from "../actionTypes";
const initialState = {
  loading: false,
  hasError: false,
  errorStatus: null,
};

const statusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return { ...state, loading: true  };
    case END_LOADING:
      return { ...state, loading: false };
    case ALERT_ERROR:
      return { loading: false, hasError: true, errorStatus: payload };
    default:
      return state;
  }
};

export default statusReducer;
