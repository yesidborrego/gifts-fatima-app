import { useState } from "react";
import { GiftContext, IGift } from "../"
import { IRoutesProps } from "../interfaces/IRoutesProps";

export const GiftProvider = ({ children }: IRoutesProps) => {
  const [giftState, setGifts] = useState<IGift[]>([])

  const onGetAllGifts = (gifts: IGift[]) => {
    setGifts(gifts);
  }
  return (
    <GiftContext.Provider value={{
      giftState,
      onGetAllGifts,
    }}>
      { children }
    </GiftContext.Provider>
  )
}
