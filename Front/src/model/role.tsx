export default interface Userrole {
  length: number;
  find(arg0: (userRole: any) => any): unknown;
  id: number;
  username: string;
  email: string;
  password?: string
  role: {
    id: number;
    name: string;
    type :string
  }
  department:{
    id:number;
    title:string;
    
  }
  };
