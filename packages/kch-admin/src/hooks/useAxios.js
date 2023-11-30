import axios from 'http';
import { useMemo, useReducer } from 'react';

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

  const httpReq = async (params) => {
    let res = null;
    dispatch({ type: ACTION_TYPE.LOADING, value: true });
    try {
      if (params) options = { ...options, ...normalizedParamsByMethod(options.method, params) };
      res = await axios.request(options);
    } catch (err) {
      res = err.response.data ?? err;
    }
    dispatch({ type: ACTION_TYPE.LOADING, value: false });
    if (res?.data?.code === '000') {
      return dispatch({ type: ACTION_TYPE.DATA, value: res.data?.data });
    }
    dispatch({ type: ACTION_TYPE.ERROR, value: res });
  };

  return {
    ...state,
    request: (orParams) => httpReq(orParams),
    update: (val) => dispatch({ type: ACTION_TYPE.DATA, value: val })
  };
};

export const generateAxiosHook =
  (method, url, options = {}) =>
  (params) => {
    const allOpts = useMemo(() => {
      const normalized = { method, url, ...options };
      normalizedParamsByMethod(method, params);
      return normalized;
    }, [params]);
    return useAxios(allOpts);
  };

const normalizedParamsByMethod = (method, params) => {
  let normalized = {};
  if (method === 'get') normalized.params = params;
  if (method === 'post') normalized.data = params;
  return normalized;
};