import axios from 'http';
import { useEffect, useMemo, useReducer } from 'react';

const ACTION_TYPE = {
  LOADING: 'loading',
  ERROR: 'error',
  DATA: 'data'
};

const reducer = (state, action) => {
  let mergedState = { ...state };
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
        res = err.response.data ?? err;
      }
      dispatch({ type: ACTION_TYPE.LOADING, value: false });
      if (res?.data?.code === '000') {
        return dispatch({ type: ACTION_TYPE.DATA, value: res.data });
      }
      dispatch({ type: ACTION_TYPE.ERROR, value: res });
    };
    httpReq();
  }, [options]);

  return state;
};

export const generateAxiosHook =
  (method, url, options = {}) =>
  (params) => {
    const allOpts = useMemo(() => {
      const normalized = { method, url, ...options };
      if (method === 'get') normalized.params = params;
      if (method === 'post') normalized.data = params;
      return normalized;
    }, [params]);
    return useAxios(allOpts);
  };
