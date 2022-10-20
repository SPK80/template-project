import { ActionsType } from "./actions";

export type StateType = {};

const initialState: StateType = {};

export const reducer = (
  state: StateType = initialState,
  action: ActionsType
): StateType => {
  switch (action.type) {
    case "[FEATURE-TEMPLATE]/[ACTION]":
      return { ...state }; //should implement state mutation
    default:
      return state;
  }
};
