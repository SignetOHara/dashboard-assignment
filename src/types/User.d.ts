interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: { city: string };
}

interface IFormInputs {
  name: string;
  username: string;
  email: string;
  city: string;
}
