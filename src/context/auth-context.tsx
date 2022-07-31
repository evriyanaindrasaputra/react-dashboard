import React from 'react';
import Cookies from 'js-cookie';

interface AuthContext {
  token?: string;
  handleAuth?: (val: string) => void;
}
const authContext = React.createContext<Partial<AuthContext>>({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = React.useState(Cookies.get('token'))
  const handleAuth = (val: string) => {
    setAuth(val)
  }
  React.useEffect(() => {
    const token = Cookies.get('token')
    if(token){
      setAuth(token)
    }
  },[])
  return (
    <authContext.Provider
      value={{
        token: auth,
        handleAuth
      }}
    >
      {children}
    </authContext.Provider>
  )
}
export const useAuthContext = () => React.useContext(authContext);
