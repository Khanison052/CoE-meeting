import Announcement from "./topic"

export default interface userResults{
  id: number
  announcement: Partial<Announcement>
  remark: string
  viewDateTime: Date
  ackDateTime: Date
  updateDateTime: Date
  expireDateTime: Date
  userCode: string
  _updated?: boolean
  _deleted?: boolean
}