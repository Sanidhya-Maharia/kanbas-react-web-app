import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function LandingPage() {
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center mt-5">
                <h1><b>Sanidhya Maharia</b></h1>
                <h3><span className="text-danger">NUID:</span> 002389307</h3>
                <h3>CS5610 Section 03</h3>
                <h3>Links</h3>
                <Link className="text-black link-underline link-underline-opacity-0" to={"/Labs"}>
                    <button className="btn btn-lg btn-info me-2"><FaFlask />Labs</button>
                </Link>
                <Link to={"/Kanbas"}>
                    <button className="btn btn-lg btn-info me-2"><FaBook />Kanbas</button>
                </Link>
                <Link to={"https://github.com/Sanidhya-Maharia/kanbas-react-web-app"}>
                    <button className="btn btn-lg btn-info me-2"><FaGithub />Github</button>
                </Link>
            </div>
        </div>
    );
}