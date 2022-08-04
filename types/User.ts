export interface Authority {
  name: string;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  authorities: Authority[];
}
