function Home() {
    return (
        <div className="bg-indigo-900 flex justify-center"> {/*Inicio div 1*/}

            <div className="container grid grid-cols-2 text-white"> {/*Inicio div 2*/}

                <div className="flex flex-col gap-4 items-center justify-center py-4"> {/*Inicio div 3.1*/}
                    <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                    <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded border-white border-solid border-2 py-2 px-4">
                            Nova Postagem
                        </div>
                    </div>
                </div> {/*Final div 3.1*/}

                <div className="flex justify-center"> {/*Inicio div 3.2*/}
                    <img className="w-2/3" src="https://i.imgur.com/VpwApCU.png" alt="Imagem pagina home" />
                </div>
            </div>
        </div>
    )
}

export default Home
