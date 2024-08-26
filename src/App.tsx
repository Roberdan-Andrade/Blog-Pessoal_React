import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"

function App() {
    //Codigo Typescript

    return (
        //Codigo TSX => HTML + CSS
        <> {/*Fragmento -- div fantasma*/}
            <BrowserRouter>
                <Navbar />
                <div className="min-h-[80vh]">
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
