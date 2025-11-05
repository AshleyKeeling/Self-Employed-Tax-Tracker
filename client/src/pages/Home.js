import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import taxImg from '../assets/tax-image-home-page.avif';

const Home = () => {
    return (
        <Container>
            <div className="row mt-5">
                <div className="col-12 col-md-8 col-lg-6">
                    <h1 className="display-1 fw-bold">Self-Employed Tax Tracker</h1>
                    <div style={{ maxWidth: "50ch" }}>
                        <small className="fw-light d-block" >Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit.</small>
                    </div>

                    <Button as={Link} to="/register" className="secondary-colour bg-light secondary-border rounded-3 mt-2">
                        Register
                    </Button>
                </div>
                <div className="col-12 col-md-4 col-lg-6">
                    <img
                        src={taxImg}
                        height="250"
                        className="img-fluid"
                        alt="tax illustration"
                    />
                </div>
            </div>
        </Container>
    )
}

export default Home;