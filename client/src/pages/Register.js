import { Container } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom";
// import { useSignin } from "../hooks/useSignin";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const { signin, error, isLoading } = useSignin();
    const { signin, error, isLoading } = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signin(email, password);
    }

    return (
        <Container className="mx-auto" style={{ maxWidth: 600 }}>
            <h1 className="display-1 mt-5 text-center fw-bold">Create Account</h1>
            <form className="col-12" id="sign-up-in-form" onSubmit={handleSubmit}>

                <div className="my-3">
                    <label className="fw-light">First Name</label>
                    <input
                        type="name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        className="rounded-3 form-control border border-dark"
                        placeholder="e.g garry"
                        style={{ height: "50px" }}
                    />
                </div>

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

                <div className="my-3">
                    <label className="heading-4-size">Confirm password</label>
                    <input
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="rounded-3 form-control border border-dark"
                        placeholder="e.g **********"
                        style={{ height: "50px" }}
                    />
                </div>



                <button disabled={isLoading} className="button border secondary-bg text-white rounded text-center py-3 w-100 fw-bold">Create Account</button>
                {error && <div className="error">{error}</div>}

                <hr />
                <span className="d-flex justify-content-center mb-3">Already have an account? <Link to="/logIn" className=" text-black ms-2"><strong>Log In</strong></Link></span>
            </form>

        </Container>
    )
}

export default Register;