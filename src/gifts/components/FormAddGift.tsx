import { useFormAddGift, IGifts } from '../';

export const FormAddGift = () => {
  const { id, description, done,formState, onChangeformState } = useFormAddGift<IGifts>({
    id: "",
    description: "",
    done: false
  });

  return (
    <>
      <h4>Agregar regalo</h4>
      <form autoComplete="off" className="form mt-3">
        <div className="mb-3">
          <input
            className="form-control m-0"
            placeholder="Nombre del regalo"
            name="description"
            value={ description }
            onChange={ onChangeformState }
          />
        </div>
        <div>
          <button
            className="btn btn-info w-100"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  )
}
