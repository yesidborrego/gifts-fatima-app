import { FC } from "react";
import { IGifts } from "../interfaces/IGifts";

interface IProps {
  gifts: IGifts,
  showButtonChoose?: boolean,
  showButtonDelete?: boolean,
}

export const GiftsList: FC<IProps> = ({
  gifts: { id, description, done },
  showButtonChoose = true,
  showButtonDelete = false,
}) => {

  const doneGifts = true;

  return (
    <>
      <div className="d-flex mb-1 justify-content-between align-items-center px-2">
        <p className="font-14 m-0 font-secondary-text"><strong>{ description }</strong></p>
        {
          showButtonChoose
          ? (
            <button
              className="btn btn-sm btn-outline-info"
              title="Escoger este regalo"
            >
              <i className="fa-regular fa-square-check"></i>
            </button>
          ) : null
        }
        {
          showButtonDelete
          ? (
            <div>
              <button
                className={`btn btn-sm me-1 ${done ? "btn-outline-warning" : "btn-outline-success"}`}
                title={`${done ? "Desactivar" : "Activar"} regalo`}
              >
                {done ? <i className="fa-solid fa-ban"></i> : <i className="fa-regular fa-square-check"></i>}
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                title="Eliminar regalo"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ) : null
        }
      </div>
      <hr/>
    </>
  )
}
