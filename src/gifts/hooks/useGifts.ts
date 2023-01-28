import { useContext } from "react";
import { GiftContext } from "../";


export const useGifts = () => {
  const { giftState, onGetAllGifts } = useContext(GiftContext);

  return {
    giftsCompleted: giftState.filter(gift => gift.done).length,
    giftsCount: giftState.length,
    giftsPending: giftState.filter(gift => !gift.done).length,
    gifts: giftState,
    onGetAllGifts,
  }
}
