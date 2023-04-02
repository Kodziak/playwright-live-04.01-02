export enum Users {
  Admin = 'admin',
  EventManager = 'event-manager',
}

export type User = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

const users: Record<Users, User> = {
  [Users.Admin]: {
    username: 'admin',
    password: 'admin',
    firstname: 'John',
    lastname: 'Doe'
  },
  [Users.EventManager]: {
    username: 'user',
    password: 'password',
    firstname: 'Event',
    lastname: 'Manager'
  }
};

export const getUser = (user: Users): User => users[user];
