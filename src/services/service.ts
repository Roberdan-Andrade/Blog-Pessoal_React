import axios from "axios";

const api_axios = axios.create({
    baseURL: "https://blogpessoal-a9sq.onrender.com",
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api_axios.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api_axios.post(url, dados)
    setDados(resposta.data)
}
