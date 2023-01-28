import { useGifts } from "../";
export const InformationGifts = () => {
  const { giftsCompleted, giftsCount, giftsPending } = useGifts();

  return (
    <div className="information-gifts">
      <div className="information-gifts-item">
        <small><strong>Cantidad de regalos:</strong></small>
        <small><strong>{ giftsCount }</strong></small>
      </div>
      <div className="information-gifts-item">
        <small><strong># Regalos pendientes:</strong></small>
        <small><strong>{ giftsPending }</strong></small>
      </div>
      <div className="information-gifts-item">
        <small><strong># Regalos escogidos:</strong></small>
        <small><strong>{ giftsCompleted }</strong></small>
      </div>
    </div>
  )
}
