import { Container } from "react-bootstrap";

const Footer = () => (
    <footer className="primary-bg mt-auto">
        <Container>
            <div className="row my-4">
                <div className="col-6 col-md-3 my-3">
                    <p className="fw-bold text-white mb-0">Self-Employed Tax Calculator</p>
                    <small className="fw-light text-white-50 ">Web app designed and created by Ashley Keeling</small>
                </div>
                <div className="col-6 col-md-3 my-3">
                    <p className="fw-bold text-white mb-0">Links</p>
                    <small className="fw-light text-white-50 d-block">
                        <a href="/home" className="text-white-50 text-decoration-none d-block">Home</a>
                        <a href="/logIn" className="text-white-50 text-decoration-none d-block">Log In</a>
                        <a href="/register" className="text-white-50 text-decoration-none d-block">Register</a>
                    </small>
                </div>
                <div className="col-6 col-md-3 my-3">
                    <p className="fw-bold text-white mb-0">Infomation</p>
                    <small className="fw-light text-white-50 d-block">123 High Street</small>
                    <small className="fw-light text-white-50 d-block">Phone: (+44) 07848 6724</small>
                    <small className="fw-light text-white-50 d-block">Email: info@selfemployed.com</small>
                </div>
                <div className="col-6 col-md-3 my-3">
                    <small className="fw-light text-white-50 ">&#174;2025 Self-Employed. All rights reserved</small>
                </div>
            </div>
        </Container>
    </footer>
);

export default Footer;