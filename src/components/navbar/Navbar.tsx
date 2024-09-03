import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout, usuario } = useContext(AuthContext)

    function logout(){
        handleLogout()
        alert("O usuário foi desconectado!")
        navigate("/")
    }

    let component: ReactNode;

    if(usuario.token !== ""){
        component = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-xl">
                <Link to='/Home' className='text-3xl font-bold uppercase px-8'>Blog Pessoal</Link>

                <div className='flex gap-4 px-4'>
                    <Link to='/postagens' className='hover:underline'>Postagens</Link>
                    <Link to='/temas' className='hover:underline'>Temas</Link>
                    <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
                    
                    <Link to='/perfil' className='hover:underline'>Perfil</Link>
                    <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                </div>
            </div>
        </div>)
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar
