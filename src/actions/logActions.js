// @flow

import type { LogActionType } from './types';
type LogDispatch = ({ type: LogActionType, payload: any }) => void;

// export const getLogs = () => 
// {
//    return async (dispatch) => {
//       setLoading();

//       const res = await fetch('/logs');
//       const data = await res.json();

//       dispatch({
//          type: 'GET_LOGS',
//          payload: data
//       });
//    };
// };

// Get logs from server
export const getLogs = () => async (dispatch: LogDispatch) =>
{
   try
   {
      setLoading();

      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
         type: 'GET_LOGS',
         payload: data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'LOGS_ERROR',
         payload: err.response.data
      });
   } 
};

export const addLog = (log: any) => async (dispatch: LogDispatch) =>
{
   try
   {
      setLoading();

      const res = await fetch('/logs', {
         method: 'POST',
         body: JSON.stringify(log),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const data = await res.json();

      dispatch({
         type: 'ADD_LOG',
         payload: data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'LOGS_ERROR',
         payload: err.response.data
      });
   } 
};


export const setLoading = (): { type: LogActionType } =>
{
   return { type: 'SET_LOADING' };
};