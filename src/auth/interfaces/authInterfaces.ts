export interface IUserDataForm {
  email: string;
  password: string;
}

export interface IUserData {
  admin: boolean;
  email: string | null;
}
