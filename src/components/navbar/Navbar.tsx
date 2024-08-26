import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-xl">
                    <Link to='/Home' className='text-3xl font-bold uppercase px-8'>Blog Pessoal</Link>

                    <div className='flex gap-4 px-4'>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <div className='hover:underline'>Postagens</div>
                        <div className='hover:underline'>Temas</div>
                        <div className='hover:underline'>Cadastrar tema</div>
                        <div className='hover:underline'>Perfil</div>
                        <div className='hover:underline'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
