// @flow

import type { TechActionType } from '../actions/types';
type TechAction = { type: TechActionType, payload: any };

const initialState = {
   techs: null,
   loading: false,
   error: null
}

export default (state: any = initialState, action: TechAction) => 
{
   switch(action.type)
   {
      case 'GET_TECHS':
         return {
            ...state,
            techs: action.payload,
            loading: false
         }
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         }
      default:
         return state;
   }
}