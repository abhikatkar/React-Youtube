

export const GET_DATA = "GET_DATA";

export const GET_LOADING = "GET_LOADING";

export const GET_ERROR = "GET_ERROR";






export const getData = (payload) =>({type:GET_DATA, payload});
export const getLoading = ()=>({type:GET_LOADING});
export const getError = ()=>({type:GET_ERROR});
