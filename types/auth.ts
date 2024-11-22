import { User } from ".";

export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    user: User;
    token: string;
  }