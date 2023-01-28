import { useFireStore } from '..';


export const useActionsGifts = () => {
  const { addNewGift, deleteGift, updateDoneGift } = useFireStore();

  const sendNewGift = (description: string) => {
    addNewGift(description);
  };

  const sendDeleteGift = (id: string) => {
    Swal.fire({
      title: 'Deseas eliminar el regalo?',
      text: "No podrás deshacer los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo',
      width: 400,
    }).then((result: any) => {
      if (result.isConfirmed) {
        deleteGift(id);
        Swal.fire(
          'Eliminado!',
          'El regalo ha sido eliminado.',
          'success'
        )
      }
    })
  };

  const sendUpdateGift = (id: string, done: boolean) => {
    updateDoneGift(id, done);
  };

  return {
    sendNewGift,
    sendDeleteGift,
    sendUpdateGift,
  }
}
