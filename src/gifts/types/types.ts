import { IGift } from "../interfaces/Gifts";

export type TypeGiftContext = {
  giftState: IGift[],
  onGetAllGifts: (gifts: IGift[]) => void,
}
