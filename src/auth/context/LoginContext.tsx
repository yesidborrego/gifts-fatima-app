import { createContext } from 'react'
import { TypeAuthContext } from '../';

export const LoginContext = createContext<TypeAuthContext>({} as TypeAuthContext);
