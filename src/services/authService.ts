import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthResponse, LoginCredentials, SignupCredentials, User} from '../types';

const TOKEN_KEY = '@auth_token';
const USER_KEY = '@user_data';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Default admin credentials
    const ADMIN_EMAIL = 'admin@yopmail.com';
    const ADMIN_PASSWORD = 'Admin@123';

    // Validate credentials
    if (
      credentials.email === ADMIN_EMAIL &&
      credentials.password === ADMIN_PASSWORD
    ) {
      const mockUser: User = {
        id: 'admin_001',
        name: 'Admin User',
        email: credentials.email,
        avatar: 'https://i.pravatar.cc/150?img=1',
      };

      const mockToken = 'mock_jwt_token_' + Date.now();

      await AsyncStorage.setItem(TOKEN_KEY, mockToken);
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(mockUser));

      return {user: mockUser, token: mockToken};
    }

    throw new Error('Invalid credentials');
  },

  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockUser: User = {
      id: Date.now().toString(),
      name: credentials.name,
      email: credentials.email,
      avatar: 'https://i.pravatar.cc/150?img=2',
    };

    const mockToken = 'mock_jwt_token_' + Date.now();

    await AsyncStorage.setItem(TOKEN_KEY, mockToken);
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(mockUser));

    return {user: mockUser, token: mockToken};
  },

  async logout(): Promise<void> {
    await AsyncStorage.removeItem(TOKEN_KEY);
    await AsyncStorage.removeItem(USER_KEY);
  },

  async getStoredToken(): Promise<string | null> {
    return await AsyncStorage.getItem(TOKEN_KEY);
  },

  async getStoredUser(): Promise<User | null> {
    const userData = await AsyncStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await this.getStoredToken();
    return !!token;
  },
};
