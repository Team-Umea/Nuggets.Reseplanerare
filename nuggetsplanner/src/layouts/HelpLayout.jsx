import { Outlet, NavLink } from "react-router-dom"

function HelpLayout() {
    return ( 
        <>
        <nav className="help">
            <NavLink to="/help/faq">FAQ</NavLink>
            <NavLink to="/help/contact">Kontakt</NavLink>
        </nav>
        <main>
         <Outlet />
        </main>
        </>
     );
}

export default HelpLayout;