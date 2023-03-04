import topic from "./topic"
export default interface userResults {
  id: number;
  attributes: {
    Topic: string;
    location: string;
    date: string;
    time: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Notice: Partial<topic>;
    Certifying: {
      url: string;
    };
    Continued: {
      url: string;
    };
    Backlog: {
      url: string;
    };
    Present: {
      url: string;
    };
    Invite: {
      url: string;
    };
    Other: {
      url: string;
    };
  };
}