import { FC } from "react";
import { IGift } from "../interfaces/Gifts";

interface IProps {
  gifts: IGift,
  isAdmin: boolean,
  sendDeleteGift: (id: string) => void,
  sendUpdateGift: (id: string, doneValue: boolean) => void,
}

export const GiftsListItem: FC<IProps> = ({
  gifts: { id, description, done },
  isAdmin,
  sendUpdateGift,
  sendDeleteGift,
}) => {

  return (
    <>
      <div className="d-flex mb-1 justify-content-between align-items-center px-2">
        <p
          className={`font-14 m-0 font-secondary-text ${done ? "strikethrough" : ""}`}
        >
          <strong>{ description }</strong>
        </p>
        {
          isAdmin
          ? (
            <div>
              <button
                className={`btn btn-sm me-1 ${done ? "btn-outline-warning" : "btn-outline-success"}`}
                title={`${done ? "Desactivar" : "Activar"} regalo`}
                onClick={ () => sendUpdateGift(id, done) }
              >
                {done ? <i className="fa-solid fa-ban"></i> : <i className="fa-regular fa-square-check"></i>}
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                title="Eliminar regalo"
                onClick={ () => sendDeleteGift(id) }
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          )
          : (
            <div className="btn-choose-gift">
              {
                done
                ? null
                : (
                  <button
                    className="btn btn-sm btn-info"
                    title="Escoger este regalo"
                    onClick={ () => sendUpdateGift(id, done) }
                  >
                    <i className="fa-regular fa-square-check"></i>
                  </button>
                )
              }
            </div>
          )
        }
      </div>
      <hr/>
    </>
  )
}
