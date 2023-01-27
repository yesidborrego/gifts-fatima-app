import gifsList from "../../data";
import { GiftsList } from '../';
import { IGifts } from "../interfaces/IGifts";

export const GiftPage = () => {
  const gifs:IGifts[] = gifsList;

  return (
    <div className="card shadow pt-3">
      <h1 className="font-primary-text ps-3">Lista de regalos: Fatima</h1>
      <div className="card-secondary rounded p-3">
        {
          gifs.map( gif => (
            <GiftsList key={gif.id} gifts={gif} />
          ))
        }
      </div>
    </div>
  )
}
