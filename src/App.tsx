import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import Perfil from "./pages/perfil/Perfil"

import ListaTemas from "./components/temas/lista_temas/ListaTemas"
import FormularioTema from "./components/temas/formulario_tema/FormularioTema"
import DeletarTema from "./components/temas/deletar_tema/DeletarTema"

import ListaPostagens from "./components/postagens/lista_postagens/ListaPostagens"
import FormularioPostagem from "./components/postagens/formulario_postagem/FormularioPostagem"
import DeletarPostagem from "./components/postagens/deletar_postagem/DeletarPostagem"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
    //Codigo Typescript

    return (
        //Codigo TSX => HTML + CSS
        <> {/*Fragmento -- div fantasma*/}
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route path="/cadastroTema" element={<FormularioTema />} />
                            <Route path="/editarTema/:id" element={<FormularioTema />} />
                            <Route path="/deletarTema/:id" element={<DeletarTema />} />
                            <Route path="/postagens" element={<ListaPostagens />} />
                            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                            <Route path="/perfil" element={<Perfil />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App
