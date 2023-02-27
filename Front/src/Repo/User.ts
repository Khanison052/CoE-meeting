import { ax } from '../config';
import { IRepository } from "./IRepo";
import UserResult from "../model/User";
import config from "../config";

export interface UserResultFilter {
  keyword?: string
}

export class UserResultRepository implements IRepository<UserResult> {
  urlPrefix = 'http://localhost:1337/api'

  async getAll(filter: UserResultFilter): Promise<UserResult[] | null> {
    const params = {...filter}
    const resp = await ax.get<UserResult[]>(`${this.urlPrefix}/meetings`, {params} )
    return resp.data
  }

  async get(id: string|number): Promise<UserResult | null> {
    const resp = await ax.get<UserResult>(`${this.urlPrefix}/meetings/${id}`)
    return resp.data
  }

  async create(entity: Partial<UserResult>): Promise<UserResult | null> {
    const resp = await ax.post<UserResult>(`${this.urlPrefix}/userResult`, entity)

    return resp.data
  }

  async update(entity: Partial<UserResult>): Promise<UserResult | null> {
    const resp = await ax.put<UserResult>(`${this.urlPrefix}/userResult/${entity.id}`, entity)

    return resp.data
  }

  async delete(id: string|number): Promise<void> {
    await ax.delete<void>(`${this.urlPrefix}/userResult/${id}`)
  }

  async view(id: string|number): Promise<UserResult | null> {
    const resp = await ax.get<UserResult>(`${this.urlPrefix}/userResult/view/${id}`)

    return resp.data
  }


  
}