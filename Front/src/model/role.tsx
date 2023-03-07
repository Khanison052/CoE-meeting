export default interface Userrole {
  id?: number;
  username?: string;
  email?: string;
  role?: {
    id?: number;
    name?: string;
  };
}