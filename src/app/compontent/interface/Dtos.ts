// interfaces.ts

export interface Login {
    userName: string;
    password: string;
    roles?: string[]; // Make roles optional if it's not always present in the response
    token: string;
  }
  