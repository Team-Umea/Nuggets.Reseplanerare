import { Outlet, NavLink } from "react-router-dom"

function HelpLayout() {
    return ( 
        <>
        <nav className="help">
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Kontakt</NavLink>
        </nav>
        <main>
         <Outlet />
        </main>
        </>
     );
}

export default HelpLayout;