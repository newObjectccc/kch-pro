import axios from 'http';
import { useEffect, useReducer } from 'react';
console.log(process.env.NODE_ENV, 'Running');

const ACTION_TYPE = {
  LOADING: 'loading',
  ERROR: 'error',
  DATA: 'data'
};

const reducer = (state, action) => {
  console.log(state, action);
  let mergedState = state;
  switch (action.type) {
    case ACTION_TYPE.LOADING:
      mergedState.loading = action.value;
      break;
    case ACTION_TYPE.ERROR:
      mergedState.error = action.value;
      break;
    case ACTION_TYPE.DATA:
      mergedState.data = action.value;
      break;
    default:
      break;
  }
  return mergedState;
};

export const useAxios = (options) => {
  const [state, dispatch] = useReducer(reducer, { error: null, loading: false, data: null });

  useEffect(() => {
    const httpReq = async () => {
      let res = null;
      dispatch({ type: ACTION_TYPE.LOADING, value: true });
      try {
        res = await axios.request(options);
      } catch (err) {
        return dispatch({
          type: ACTION_TYPE.ERROR,
          value: { code: '400', message: '前端错误', error: err }
        });
      }
      dispatch({ type: ACTION_TYPE.LOADING, value: false });
      if (res?.code !== '000') {
        return dispatch({ type: ACTION_TYPE.DATA, value: res });
      }
      dispatch({ type: ACTION_TYPE.ERROR, value: res });
    };
    httpReq();
  }, [options]);

  return {
    error: state.error,
    loading: state.loading,
    data: state.data
    // abort: state.abort,
    // abortHandler: useCallback(() => {}, [])
  };
};
