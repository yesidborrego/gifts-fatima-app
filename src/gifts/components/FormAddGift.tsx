import { FC, FormEvent } from "react";
import { useFormAddGift, IGift, useActionsGifts } from "../";

const initialState = {
  id: "",
  description: "",
  done: false,
};

export const FormAddGift: FC = () => {
  const { description, onChangeformState, onResetInputs } =
    useFormAddGift<IGift>(initialState);
  const { sendNewGift } = useActionsGifts();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    sendNewGift(description);
    onResetInputs();
  };

  return (
    <>
      <h4>Agregar regalo</h4>
      <form autoComplete="off" className="form mt-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            className="form-control m-0"
            placeholder="Nombre del regalo"
            name="description"
            value={description}
            onChange={onChangeformState}
          />
        </div>
        <div>
          <button className="btn btn-info w-100">Agregar</button>
        </div>
      </form>
    </>
  );
};
