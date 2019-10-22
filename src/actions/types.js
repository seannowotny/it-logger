// @flow

type OtherActionType = 'SET_CURRENT' | 'CLEAR_CURRENT' | 'SET_LOADING';

export type LogActionType = 'GET_LOGS' | 'ADD_LOG' | 'DELETE_LOG' | 'UPDATE_LOG' | 'CLEAR_LOGS' | 'LOGS_ERROR' | 'SEARCH_LOGS' | OtherActionType;
export type TechActionType = 'GET_TECHS' | 'ADD_TECH' | 'DELETE_TECH' | 'TECHS_ERROR' | OtherActionType;