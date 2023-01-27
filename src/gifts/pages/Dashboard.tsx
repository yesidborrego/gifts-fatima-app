import { FormAddGift, GiftsList, IGifts } from "../"
import gifsList from "../../data";

export const Dashboard = () => {
  const gifs:IGifts[] = gifsList;

  return (
    <div className="container-main text-center p-2">
      <h1 className="font-primary-text p-3 m-0">Administrar lista de regalos</h1>
      <hr/>
      <div className="container-admin">
        <div className="form-side">
          <FormAddGift />
        </div>
        <div className="list-gifts-side">
          <h4>Lista de regalos</h4>
          <div className="list-gifts-side-body">
            {
              gifs.map( gif => (
                <GiftsList
                  key={gif.id}
                  gifts={gif}
                  showButtonChoose={false}
                  showButtonDelete={true}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
