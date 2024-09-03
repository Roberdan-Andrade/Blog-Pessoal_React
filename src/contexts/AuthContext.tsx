import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleLogout(): void
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(UsuarioLogin: UsuarioLogin) {

        setIsLoading(true);

        try {
            await login('/usuarios/logar', UsuarioLogin, setUsuario);
            ToastAlerta("Usuario Autenticado com Sucesso!", "Sucesso")
        } catch (error) {
            ToastAlerta("Os dados do usuario estão incosistentes!", "Erro")
        }

        setIsLoading(false);
    }

    function handleLogout(){
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

  return (
    <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext