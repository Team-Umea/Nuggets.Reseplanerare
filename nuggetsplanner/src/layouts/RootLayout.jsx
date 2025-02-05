import { Outlet, NavLink } from "react-router-dom"
import '../styles/RootLayout.css'

function RootLayout() {
    return ( <div>
        <header>
        <h1>Reseplaneraren</h1>
        <nav>
            
            <ul>
                <NavLink to="/">Hem</NavLink>
                <NavLink to="about">Om</NavLink>
                <NavLink to="tripdetails">Detaljer</NavLink>
            </ul>
        </nav>

        </header>
        <main>
        <Outlet />
        </main>
        <footer>

        </footer>
    </div> );
}

export default RootLayout;