import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div className="d-flex justify-content-center">
            <div>
            <h1>Sanidhya Maharia</h1>
            <h3>NUID: 002389307</h3>
            <h3>CS5610 Section 03</h3>
            <h3>Links</h3>
            <ul className="list-group">
                <li className="list-group-item"><Link to={"/Labs"}>Labs</Link></li>
                <li className="list-group-item"><Link to={"/Kanbas"}>Kanbas</Link></li>
                <li className="list-group-item"><Link to={"https://github.com/Sanidhya-Maharia/kanbas-react-web-app"}>Github repo</Link></li>
            </ul>
            </div>
        </div>
    );
}