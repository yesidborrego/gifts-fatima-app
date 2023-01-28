export interface IGifts {
  id: string,
  description: string,
  done: boolean,
}

export interface IGiftState {
  todoCompleted: number,
  todoCount: number,
  todoPending: number,
  todos: IGifts[],
}

export interface IAuthForm {
  email: string,
  password: string,
  repeatPassword?: string,
}