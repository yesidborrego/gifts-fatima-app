import { IGifts, IGiftState } from "../interfaces/Gifts";

export type TypeGiftContext = {
  giftState: IGiftState,
  onAddGift: (id: string) => void,
  onDeleteGift: (id: string) => void,
  onToggleDoneGift: (id: string) => void,
}

export type TypeActionsState =
{ type: "Add todo", payload: IGifts } |
{ type: "Delete Todo", payload: string } |
{ type: "Toggle Todo", payload: string }