import { FC } from "react";
import { IGift } from "../interfaces/Gifts";
import { GiftsListItem, useActionsGifts, useLogin } from '../';

interface IProps {
  gifts: IGift[],
}

export const GiftsList:FC<IProps> = ({ gifts }) => {
  const { sendDeleteGift, sendUpdateGift } = useActionsGifts()
  const { admin } = useLogin();

  return (
    <>
      <h4>Lista de regalos</h4>
      <div className="list-gifts-side-body">
        {
          gifts.map((gift) => (
            <GiftsListItem
              key={gift.id}
              gifts={gift}
              isAdmin={ admin }
              sendDeleteGift={ sendDeleteGift }
              sendUpdateGift={ sendUpdateGift }
            />
          ))
        }
      </div>
    </>
  )
}
