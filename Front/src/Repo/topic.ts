import topic from "../model/topic";



export interface topicFilter {
  keyword?: string
}

export class TopicRepository {
  
  async getAll(filter: topicFilter): Promise<topic[] | null> {
    return  ([{ id: 1, topic: 'React' },])

  }
}
