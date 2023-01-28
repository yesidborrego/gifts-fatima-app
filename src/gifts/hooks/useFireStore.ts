import { IGift, useGifts } from "../";
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
    toastr.success("Se ha agregado el regalo a la lista");
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
      ? toastr.success("Se ha habilitado el regalo")
      : toastr.warning("Se ha inhabilitado el regalo");
    } else {
      toastr.success("Haz escogido un regalo, Gracias!");
    }
  }

  return {
    getAllGifts,
    addNewGift,
    deleteGift,
    updateDoneGift,
  }
}
