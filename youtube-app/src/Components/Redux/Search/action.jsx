

export const GET_VALUE = "GET_VALUE";
export const GET_USER = "GET_USER";



export const getValue = (payload) =>({type:GET_VALUE, payload});

export const getUser = (payload) =>({type:GET_USER, payload})