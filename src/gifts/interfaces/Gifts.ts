export interface IGift {
  id: string,
  description: string,
  done: boolean,
}

export interface IAuthForm {
  email: string,
  password: string,
  repeatPassword?: string,
}