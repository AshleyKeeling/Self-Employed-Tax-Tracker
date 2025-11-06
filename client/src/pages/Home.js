import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import taxImg from '../assets/tax-image-home-page.avif';
import invoiceIcon from '../assets/invoice-icon.png';
import taxIcon from '../assets/tax-icon.png';
import pdfIcon from '../assets/pdf-icon.png';

const Home = () => {
    return (
        <Container>
            <div className="row mt-5">
                <div className="col-12 col-md-8 col-lg-6">
                    <h1 className="display-1 fw-bold">Self-Employed Tax Tracker</h1>
                    <div style={{ maxWidth: "50ch" }}>
                        <small className="fw-light d-block lh-lg" >Keep your business finances organised and stress-free.
                            Track income, record expenses, and calculate your tax and National Insurance automatically — all in one simple dashboard..</small>
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
            <div className="row gx-4 gy-3 py-5">
                {/* col 1 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border border-dark rounded-3 bg-white">
                        <div className="row g-0 primary-bg text-white rounded-3 overflow-hidden">
                            <div className="col-3 d-flex align-items-center justify-content-center p-3">
                                <img src={invoiceIcon} className="img-fluid" alt="invoice icon" />
                            </div>
                            <div className="col-9 d-flex align-items-center">
                                <h2 className="display-7 mb-0 ps-3">Upload Invoices & Receipts</h2>
                            </div>
                        </div>
                        <div className="p-5 text-center">
                            <small className="lh-lg fw-light">Upload and store all your business invoices and receipts securely in one place.
                                Whether it’s client payments, expenses, or supplier invoices, we help you keep accurate digital records for easy access at tax time.</small>
                        </div>
                    </div>
                </div>

                {/* col 2 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border border-dark rounded-3 bg-white">
                        <div className="row g-0 primary-bg text-white rounded-3 overflow-hidden">
                            <div className="col-3 d-flex align-items-center justify-content-center p-3">
                                <img src={taxIcon} className="img-fluid" alt="tax icon" />
                            </div>
                            <div className="col-9 d-flex align-items-center">
                                <h2 className="display-7 mb-0 ps-3">Calculate Tax & National Insurance</h2>
                            </div>
                        </div>
                        <div className="p-5">
                            <small className="lh-lg fw-light text-center">Instantly estimate how much tax and National Insurance you owe based on your recorded income and expenses.
                                Our calculator keeps you up-to-date with HMRC thresholds so you always know where you stand.</small>
                        </div>
                    </div>
                </div>

                {/* col 3 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border border-dark rounded-3 bg-white">
                        <div className="row g-0 primary-bg text-white rounded-3 overflow-hidden">
                            <div className="col-3 d-flex align-items-center justify-content-center p-3">
                                <img src={pdfIcon} className="img-fluid" alt="pdf icon" />
                            </div>
                            <div className="col-9 d-flex align-items-center">
                                <h2 className="display-7 mb-0 ps-3">Export Data as PDF</h2>
                            </div>
                        </div>
                        <div className="p-5">
                            <small className="lh-lg fw-light text-center">Generate professional PDF reports of your income, expenses, and tax summaries in seconds.
                                Perfect for sharing with your accountant or saving for your personal records.</small>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Home;