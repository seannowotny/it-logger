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
         payload: err.response.statusText
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
         payload: err.response.statusText
      });
   } 
};

export const deleteLog = (id: number) => async (dispatch: LogDispatch) =>
{
   try
   {
      setLoading();

      await fetch(`/logs/${id}`, { method: 'DELETE' });

      dispatch({
         type: 'DELETE_LOG',
         payload: id
      });
   }
   catch(err)
   {
      dispatch({
         type: 'LOGS_ERROR',
         payload: err.response.statusText
      });
   } 
};

export const updateLog = (log: any) => async (dispatch: LogDispatch) =>
{
   try
   {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, { 
         method: 'PUT',
         body: JSON.stringify(log),
         headers: {
            'Content-Type': 'application/json'
         } 
      });

      const data = await res.json();

      dispatch({
         type: 'UPDATE_LOG',
         payload: data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'LOGS_ERROR',
         payload: err.response.statusText
      });
   } 
};

export const searchLogs = (text: string) => async (dispatch: LogDispatch) =>
{
   try
   {
      setLoading();

      const res = await fetch(`/logs/?q=${text}`);
      const data = await res.json();

      dispatch({
         type: 'SEARCH_LOGS',
         payload: data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'LOGS_ERROR',
         payload: err.response.statusText
      });
   } 
};

export const setCurrent = (log: any) => 
{
   return {
      type: 'SET_CURRENT',
      payload: log
   };
}

export const clearCurrent = () => 
{
   return { type: 'CLEAR_CURRENT' };
}

export const setLoading = (): { type: LogActionType } =>
{
   return { type: 'SET_LOADING' };
};