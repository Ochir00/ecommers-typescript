type userType = {
  _id: string;          // Backendees ogon
  name: string;
  password: string;
  email: string;
  roler : string;       // Backendees ogon
  createAt? : string;   // Backendees ogon
  updateAt? : string;   // Backendees ogon
};
export const users: userType[] = [
  {
    _id: "1",
    name: "admin",
    password: "11223344",
    email: "test@gmail.com",
    roler : "admin",
  },
];
