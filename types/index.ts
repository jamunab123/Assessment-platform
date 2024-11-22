// src/types/index.ts
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'candidate' | 'educator' | 'admin';
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
  }