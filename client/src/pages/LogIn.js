import { Container } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password);
    }

    return (
        <Container className="mx-auto" style={{ maxWidth: 600 }}>
            <h1 className="display-1 mt-5 text-center fw-bold">Welcome Back</h1>
            <form className="col-12" id="sign-up-in-form" onSubmit={handleSubmit}>

                <div className="my-3">
                    <label className="fw-light">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="rounded-3 form-control border border-dark"
                        placeholder="e.g garrysmith@gmail.com"
                        style={{ height: "50px" }}
                    />
                </div>

                <div className="my-3">
                    <label className="heading-4-size">Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="rounded-3 form-control border border-dark"
                        placeholder="e.g **********"
                        style={{ height: "50px" }}
                    />
                </div>

                <div className="d-flex justify-content-between align-items-center my-3">
                    <fieldset>
                        <input
                            type="checkbox"
                            checked={keepSignedIn}
                            className="form-check-input"
                            onChange={(e) => setKeepSignedIn(e.target.checked)}
                        />
                        <label className="body-size">Keep me signed in?</label>
                    </fieldset>

                    <p className="body-size mb-0"><strong>Forgot Your Password?</strong></p>
                </div>
                {error && <div className="text-danger text-center my-2">{error}</div>}
                <button disabled={isLoading} className="button border secondary-bg text-white rounded text-center py-3 w-100 fw-bold">Log In</button>

                <hr />
                <span className="d-flex justify-content-center mb-3">Don't have an account? <Link to="/register" className=" text-black ms-2"><strong>Create Account</strong></Link></span>
            </form>
        </Container>
    )
}

export default LogIn;