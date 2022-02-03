export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: { city: string };
}

export interface IFormInputs {
  name: string;
  username: string;
  email: string;
  city: string;
}
