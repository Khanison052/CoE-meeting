export default interface Userrole {
  length: number;
  find(arg0: (userRole: any) => any): unknown;
  id: number;
  username: string;
  email: string;
  role: {
    id: number;
    name: string;
  }
  department:{
    id:number;
    title:string;
  }
  };
