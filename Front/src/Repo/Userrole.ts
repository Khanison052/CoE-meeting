import { ax } from '../config';
import { IRepository } from "./IRepo";
import Userrole from "../model/role";
import config from "../config";
import { getToken } from './auth';


export class UserRoleRepository  {
  urlPrefix = 'http://localhost:1337/api'
  
  
  async getuser(): Promise<Userrole[] | null> {
    const resp = await ax.get(`${this.urlPrefix}/users/me?populate=role`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    console.log(resp.data)
    return resp.data
  }
  
}
