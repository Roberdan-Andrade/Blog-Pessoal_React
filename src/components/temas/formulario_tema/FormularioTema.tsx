import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/service";
import { RotatingLines } from "react-loader-spinner";

function FormularioTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema);

    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const { id } = useParams<{ id: string }>();

    const { handleLogout, usuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token == '') {
            alert('Voce precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/temas')
    }

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    //Função que atualiza as propriedades do estado tema
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        //Checa se é uma atualização ou novo cadastro
        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { Authorization: token }
                });
                alert("Tema atualizado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { Authorization: token }
                });
                alert("Tema cadastrado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id == undefined ? 'Cadastrar Tema' : 'Atualizar Tema'}
            </h1>

            <form onSubmit={gerarNovoTema} className="w-1/2 flex flex-col gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do tema</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}
                </button>
            </form>
        </div>
    );
}

export default FormularioTema;