export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  error: string | null;
  token: string | null;
}
