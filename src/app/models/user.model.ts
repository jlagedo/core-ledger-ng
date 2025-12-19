export interface User {
id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  isActive: boolean;
  lastLoginAt: Date | null;
}
