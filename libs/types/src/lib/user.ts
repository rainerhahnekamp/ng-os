export interface User {
  id: number;
  firstname: string;
  name: string;
  email: string;
}

export const ANONYMOUS_USER: User = {
  id: 0,
  firstname: '',
  name: '',
  email: '',
};
