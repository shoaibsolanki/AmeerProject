import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GetUserDetails } from "../services/Auth/Authapi";

type User = {
  id: string;
  name?: string;
  email?: string;
  // allow additional fields
  [key: string]: any;
};
type ProfileData = {
  _id: string;
  email: string;
  role: string;
  isVerified: boolean;
  isActive: boolean;
  country: string;
  addressLine: string;
  city: string;
  name: string;
  phone: string;
  state: string;
  tradingUsername: string;
  orderId: string;
  purchasedProducts: [];
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  signIn: (user: User, token?: string) => void;
  signOut: () => void;
  updateUser: (patch: Partial<User>) => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  profile: ProfileData | null;
};

const STORAGE_USER_KEY = "app_auth_user";
const STORAGE_TOKEN_KEY = "app_auth_token";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_USER_KEY);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  });
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const [token, setToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_TOKEN_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
      else localStorage.removeItem(STORAGE_USER_KEY);
    } catch {
      // ignore storage errors
    }
  }, [user]);

  useEffect(() => {
    try {
      if (token) localStorage.setItem(STORAGE_TOKEN_KEY, token);
      else localStorage.removeItem(STORAGE_TOKEN_KEY);
    } catch {
      // ignore storage errors
    }
  }, [token]);

  const signIn = (u: User, t?: string) => {
    setUser(u);
    if (t) setToken(t);
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
  };

  const updateUser = (patch: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...patch } : prev));
  };

  const getUserDetails = async () => {
    try {
      const response = await GetUserDetails(user?._id);
      console.log(response);
      const userProfile = response.user;
      setProfile(userProfile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: !!user,
      signIn,
      signOut,
      updateUser,
      setUser,
      profile,
    }),
    [user, token, profile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
