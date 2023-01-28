import { IGiftState, TypeActionsState } from "../";

export const giftReducer = (state: IGiftState, action:TypeActionsState) => {
  switch (action.type) {
    case "Add todo":
      return state;

    case "Delete Todo":
      return state;

    case "Toggle Todo":
      return state;

    default:
      return state;
  }
}
