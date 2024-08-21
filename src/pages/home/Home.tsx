function Home() {
    return (
        <div style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center"
        }}> {/*Inicio div 1*/}

            <div> {/*Inicio div 2*/}
                
                <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}> {/*Inicio div 3.1*/}
                    <h2>Seja Bem Vinde!</h2>
                    <p>Expresse aqui seus pensamentos e opiniões</p>
                </div>

                <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}> {/*Inicio div 3.2*/}
                    <img src="https://i.imgur.com/VpwApCU.png" alt="Imagem pagina home" width="400px" />
                </div>
            </div>
        </div>
    )
}

export default Home
