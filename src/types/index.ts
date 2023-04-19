export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ISignIn = {
  email: IUser['email'];
  password: IUser['password'];
};
