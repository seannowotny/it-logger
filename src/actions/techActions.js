// @flow

import type { TechActionType } from './types';
type TechDispatch = ({ type: TechActionType, payload: any }) => void;

export const getTechs = () => async (dispatch: TechDispatch) =>
{
   try
   {
      setLoading();

      const res = await fetch('/techs');
      const data = await res.json();

      dispatch({
         type: 'GET_TECHS',
         payload: data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'TECHS_ERROR',
         payload: err.response.statusText
      });
   } 
};

export const setLoading = (): { type: TechActionType } =>
{
   return { type: 'SET_LOADING' };
};