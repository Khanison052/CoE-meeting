import UserResult from './User'
export default interface MeetingResponse {
    data: UserResult[],
    meta: {
      pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number,
      },
    },
  }