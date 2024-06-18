import { Planing } from "../views/planing"
import { Politics } from "../views/politics"

export const HomeScreen = () => {




    return (
        <div className="home-container">
            <nav className="home-nav-up">
                <div className="img-nav-logo">
                    <img src="/img/Nuevo-BOS2.png" alt=""></img>
                </div>
                <h2>Sistema de Gestión Ambiental</h2>
                <div className="buttons-container">
                    <a>Home</a>
                    <a>Planificacion</a>
                    <a>PG</a>
                    <a>IT</a>
                    <a>Recursos</a>
                </div>
            </nav>
            <main className="home-main">
                {/* <Politics/> */}
                <Planing/>
            </main>
        </div>
    )
}
