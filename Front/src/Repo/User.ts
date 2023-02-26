import { ax } from '../config';
import { IRepository } from "./IRepo";
import UserResult from "../model/User";
import config from "../config";
import { Https } from '@mui/icons-material';

export interface UserResultFilter {
    keyword?: string
  }

export class UserResultRepository {
    urlPrefix = 'http://localhost:1337/auth/local'
  
    async getAll(filter: UserResultFilter): Promise<UserResult[] | null> {
      const params = {...filter}
      const resp = await ax.get<UserResult[]>(`${this.urlPrefix}`, {params} )
      return resp.data
    }
  
    }