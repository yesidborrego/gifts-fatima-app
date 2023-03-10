import { ChangeEvent, useState } from "react";

export const useFormAddGift = <T extends object>(initState: T) => {
  const [ formState , setFormUser] = useState(initState);

  const onChangeformState = ({ target }: ChangeEvent<HTMLInputElement>):void => {
    const { name, value } = target;
    setFormUser({
      ...formState,
      [name]: value
    })
  }

  const onResetInputs = () => {
    setFormUser(initState);
  }

  return {
    ...formState,
    formState,
    onChangeformState,
    onResetInputs,
  }
}
