import { useEffect } from "react";
import { GiftsList, useGifts } from "../";
import { useFireStore } from "../hooks/useFireStore";


export const GiftPage = () => {
  const { gifts } = useGifts();
  const { getAllGifts } = useFireStore();

  useEffect(() => {
    getAllGifts();
  }, [gifts]);

  return (
    <div className="card shadow pt-3 animate__animated animate__fadeIn">
      <h1 className="font-primary-text text-center ps-3">Lista de regalos</h1>
      <div className="card-secondary rounded p-3">
        <GiftsList gifts={ gifts } />
      </div>
    </div>
  );
};
