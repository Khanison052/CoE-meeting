export default interface userResults {
  id: number;
  attributes: {
    Topic: string;
    location: string;
    date: Date ;
    time: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Notice: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    Certifying: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    Continued: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    Backlog: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    Present: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    Invite: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    Other: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    departments: {
      data: {
        id: number;
        attributes: {
          title: string;
        };
      };
    };
  };
}