// action - state management
import * as actionTypes from './actions';

export const initialState = {
  // id: null,
  // pid: null,
  // phoneNum: "18108370361",
  // username: "chenxinshuo",
  // roleId: null,
  // createdAt: "2023-10-24T04:01:59.594Z",
  // createdBy: "",
  // createdById: 0,
  // updatedAt: null,
  // updatedBy: null,
  // updatedById: null,
  // remark: null,
  // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicGlkIjpudWxsLCJwaG9uZU51bSI6IjE4MTA4MzcwMzYxIiwidXNlcm5hbWUiOiJjaGVueGluc2h1byIsInJvbGVJZCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0xMC0yNFQwNDowMTo1OS41OTRaIiwiY3JlYXRlZEJ5IjoiIiwiY3JlYXRlZEJ5SWQiOjAsInVwZGF0ZWRBdCI6bnVsbCwidXBkYXRlZEJ5IjpudWxsLCJ1cGRhdGVkQnlJZCI6bnVsbCwicmVtYXJrIjpudWxsLCJpYXQiOjE3MDI0Mzk4MTR9.iMVUVpinJ-Vy_JjwEVue2y1H8U8HuSFr9hf3ZoVizhY"
};

// ==============================|| USER REDUCER ||============================== //

const userModule = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        ...action.value
      };
    case actionTypes.USER_REGISTER:
      return {
        ...state,
        ...action.value
      };
    case actionTypes.USER_LOGINOUT:
      return {
        ...state,
        ...action.value
      };
    default:
      return state;
  }
};

export default userModule;
