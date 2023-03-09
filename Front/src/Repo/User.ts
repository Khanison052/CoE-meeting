import { ax } from '../config';
import { IRepository } from "./IRepo";
import UserResult from "../model/meeting";
import config from "../config";
import { getToken } from './auth';

export interface UserResultFilter {
  keyword?: string
}

export class UserResultRepository implements IRepository<UserResult> {
  urlPrefix = 'http://localhost:1337/api'
  
  async post(username: string, password: string){
    const response = await ax.post(`${this.urlPrefix}/auth/local`, {
      "identifier": username,
      "password": password
      });
    return response.data.jwt

  }
  async getAll(): Promise<UserResult[] | null> {
    const resp = await ax.get(`${this.urlPrefix}/meetings?populate=*`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    return resp.data.data
  }
  
  async get(id: string|number): Promise<UserResult | null> {
    const resp = await ax.get(`${this.urlPrefix}/meetings/${id}?populate=*`,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }); 
    return resp.data.data
  }

  async create(entity: Partial<UserResult>): Promise<UserResult | null> {
    const resp = await ax.post<UserResult>(`${this.urlPrefix}/meetings/${entity.id}?populate=notice`, entity,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'multipart/form-data',
      },
    }); 

    return resp.data
  }

  async update(entity: Partial<UserResult>): Promise<UserResult | null> {
    const resp = await ax.put<UserResult>(`${this.urlPrefix}/meetings/${entity.id}?populate=*`, entity,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'multipart/form-data',
      },
    }); 
    return resp.data
  }

}