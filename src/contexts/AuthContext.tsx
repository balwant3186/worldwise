import { createContext, useContext, useReducer } from "react";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthContextProps = {
  children?: React.ReactNode;
};

type User = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

type State = {
  user: User | null;
  isAuthenticated: boolean;
};

const initialState: State = {
  user: null,
  isAuthenticated: false,
};

type Action =
  | {
      type: "login";
      payload: User;
    }
  | {
      type: "logout";
    };

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "logout":
      return {
        ...state,
        ...initialState,
      };

    default:
      throw new Error("Unknown action type");
  }
};

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login: { (email: string, password: string): void } = (
    email,
    password
  ) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
