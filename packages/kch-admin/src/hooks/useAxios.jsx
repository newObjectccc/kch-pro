import Axios from 'axios';
import { useReducer } from 'react';
console.log(process.env.NODE_ENV, 'Running');

const BASEURL_ENV_MAP = {
  production: 'http://47.108.164.241/api',
  development: 'http://47.108.164.241/api'
};

const axiosInstance = new Axios({});

const reducer = (state, action) => {};

const useAxios = ({ url, options }) => {
  const [state, dispatch] = useReducer(reducer, { error: null, loading: false, res: null });

  return {
    error: state.error,
    loading: state.loading,
    res: state.res
    // abort: state.abort,
    // abortHandler: useCallback(() => {}, [])
  };
};
