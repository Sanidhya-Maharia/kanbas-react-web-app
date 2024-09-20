import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div>
            <h1>Sanidhya Maharia</h1>
            <h2>NUID: 002389307</h2>
            <h2>CS5610 Section 03</h2>
            <h2>Links</h2>
            <ul>
                <li><Link to={"/Labs"}>Labs</Link></li>
                <li><Link to={"/Kanbas"}>Kanbas</Link></li>
                <li><Link to={"https://github.com/Sanidhya-Maharia/kanbas-react-web-app"}>Github repo</Link></li>
            </ul>
        </div>
    );
}