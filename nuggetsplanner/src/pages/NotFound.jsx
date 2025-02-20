import { Link } from "react-router-dom";
import '../styles/NotFound.css';

export default function NotFound() {
    return (
        <div className="error-container">
            <div className="error-message">
                <h2 className="error-title">Hoppsan, sidan hittades inte!</h2>
                <p className="error-description">Sidan du försökte nå finns inte.</p>
                <p className="back-home">
                    Gå tillbaka till <Link to="/" className="home-link">Hem</Link>
                </p>
            </div>
        </div>
    );
}
