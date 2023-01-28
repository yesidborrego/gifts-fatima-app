import { useReducer } from 'react'
import { GiftContext, giftReducer, IGiftState } from '../'
import gifsList from '../../data';
import { IRoutesProps } from '../interfaces/IRoutesProps';

const INITIAL_STATE:IGiftState = {
  todoCount: 2,
  todoCompleted: 1,
  todoPending: 1,
  todos: gifsList,
}

export const GiftProvider = ({ children }: IRoutesProps) => {
  const [ giftState , dispatch] = useReducer(giftReducer, INITIAL_STATE);

  const onAddGift = () => {
    console.log("onAddGift");
  }

  const onDeleteGift = () => {
    console.log("onDeleteGift");
  }

  const onToggleDoneGift = () => {
    console.log("onToggleGift");
  }


  return (
    <GiftContext.Provider value={{
      giftState,
      onAddGift,
      onDeleteGift,
      onToggleDoneGift,
    }}>
      { children }
    </GiftContext.Provider>
  )
}
