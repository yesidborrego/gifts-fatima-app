import { useEffect } from "react";
import {
  FormAddGift,
  GiftsList,
  InformationGifts,
  useFireStore,
  useGifts,
} from "../";

export const Dashboard = () => {
  const { gifts } = useGifts();
  const { getAllGifts } = useFireStore();

  useEffect(() => {
    getAllGifts();
  }, [gifts]);

  return (
    <div className="container-main text-center p-2 animate__animated animate__fadeIn">
      <h1 className="font-primary-text p-3 m-0">
        Administrar lista de regalos
      </h1>
      <hr />
      <div className="container-admin">
        <div className="form-side">
          <FormAddGift />
          <InformationGifts />
        </div>
        <div className="list-gifts-side">
          <GiftsList gifts={ gifts } />
        </div>
      </div>
    </div>
  );
};
