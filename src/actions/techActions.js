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

export const addTech = (tech: any) => async (dispatch: TechDispatch) =>
{
   try
   {
      setLoading();

      const res = await fetch('/techs', {
         method: 'POST',
         body: JSON.stringify(tech),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const data = await res.json();

      dispatch({
         type: 'ADD_TECH',
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

export const deleteTech = (id: number) => async (dispatch: TechDispatch) =>
{
   try
   {
      setLoading();

      await fetch(`/techs/${id}`, {
         method: 'DELETE'
      });

      dispatch({
         type: 'DELETE_TECH',
         payload: id
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