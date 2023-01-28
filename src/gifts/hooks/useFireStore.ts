import Swal from "sweetalert2";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { LoginContext } from "../../auth";
import { IGift, useGifts } from "../";

const db = getFirestore();

export const useFireStore = () => {
  const { onGetAllGifts } = useGifts();
  const { userData } = useContext(LoginContext);

  const colRef = collection(db, "gifts");
  // queries - sort
  const q = query(colRef, orderBy("createdAt"));

  const getAllGifts = async () => {
    onSnapshot(q, (snapshot) => {
      let gifts:IGift[] = [];
      snapshot.docs.forEach((doc) => {
        gifts.push({
                id: doc.id,
                description: doc.data().description,
                done: doc.data().done,
              });
      })
      onGetAllGifts(gifts);
    })
  }

  const addNewGift = async (description: string) => {
    const newGift = {
      description,
      done: false,
      createdAt: serverTimestamp(),
    }
    await addDoc(colRef, newGift);
    Swal.fire({
      icon: 'success',
      title: 'El regalo se ha agregado a la lista',
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      position: 'top-right',
    })
  };

  const deleteGift = async (id: string) => {
    const docRef = doc(db, "gifts", id);
    await deleteDoc(docRef)
  };

  const updateDoneGift = async (id: string, doneValue: boolean) => {
    const docRef = doc(db, "gifts", id);
    await updateDoc(docRef, {
      done: userData.admin ? !doneValue : true,
    })
    if(userData.admin) {
      doneValue
      ? (
          Swal.fire({
            icon: 'success',
            title: 'El regalo se ha habilitado',
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            position: 'top-right',
          })
        )
      : (
        (
          Swal.fire({
            icon: 'warning',
            title: 'El regalo se ha inhabilitado',
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            position: 'top-right',
          })
        )
      )
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Haz escogido un regalo, Fatima te lo agradece!',
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: 'top-right',
      })
    }
  }

  return {
    getAllGifts,
    addNewGift,
    deleteGift,
    updateDoneGift,
  }
}
