// @flow

import type { LogActionType } from '../actions/types';
type LogAction = { type: LogActionType, payload: any };

const initialState =
{
   logs: null,
   current: null,
   loading: false,
   error: null
}

export default (state: any = initialState, action: LogAction ) => 
{
   switch(action.type)
   {
      case 'GET_LOGS':
         return {
            ...state,
            logs: action.payload,
            loading: false
         };
      case 'ADD_LOG':
         return {
            ...state,
            logs: [...state.logs, action.payload],
            loading: false 
         };
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         };
      case 'LOGS_ERROR':
         console.error(action.payload);
         return {
            ...state,
            error: action.payload
         };
      default:
         return state;
   }
}