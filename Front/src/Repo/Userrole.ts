import { ax } from '../config';
import Userrole from "../model/role";
import { getToken } from './auth';


export class UserRoleRepository  {
  urlPrefix = 'http://localhost:1337/api'
  
  async getAll(): Promise<Userrole[] | null> {
    const resp = await ax.get(`${this.urlPrefix}/users?populate=*`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    console.log(resp.data)
    return resp.data
  }
  async getuser(): Promise<Userrole | null> {
    const resp = await ax.get(`${this.urlPrefix}/users/me?populate=*`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    console.log(resp.data)
    return resp.data
  }
  async create(userData: any): Promise<Userrole | null> {
    console.log(userData)
    const resp = await ax.post(`${this.urlPrefix}/users`, userData,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    console.log(resp.data)
    return resp.data
  }
  async update(userData: any): Promise<Userrole | null> {
    console.log(userData)
    const resp = await ax.put(`${this.urlPrefix}/users/${userData.id}`, userData,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    console.log(resp.data)
    return resp.data
  }
  async delete(id: string|number): Promise<void> {
    await ax.delete<void>(`${this.urlPrefix}/users/${id}`,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
  }
  
  
}
