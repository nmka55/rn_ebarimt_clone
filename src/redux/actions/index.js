import {
  RECEIPT_ADD_EDIT,
  RECEIPT_DELETE,
  USER_LOGIN,
  USER_LOGOUT,
} from '../constants';

export function userLogin(username, password) {
  return dispatch => {
    dispatch({type: USER_LOGIN, userData: {username, password}});
  };
}

export function userLogout() {
  return dispatch => {
    dispatch({type: USER_LOGOUT});
  };
}

export function receiptAddEdit(data) {
  return dispatch => {
    dispatch({
      type: RECEIPT_ADD_EDIT,
      data,
    });
  };
}

export function receipDelete(id) {
  return dispatch => {
    dispatch({
      type: RECEIPT_DELETE,
      data: id,
    });
  };
}
