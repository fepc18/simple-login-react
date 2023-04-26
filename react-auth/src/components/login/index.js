import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import "../../assets/css/style.css";
import logo from "../../assets/img/brand/logo-medical.png";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { isLoginLoading, hasLoginError, login, isLogged } = useUser()



    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
    };


    return (
        <>
            <div className="page bg-image">
                <div className="">
                    <div className="my-auto page page-h">
                        <div className="main-signin-wrapper">
                            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7">
                                <div className="text-center mb-3">

                                </div>
                                <div className="card custom-card box-shadow-none">
                                    <div className="card-body p-5">
                                        <div className="main-signup-header">
                                            <img src={logo} alt="logo" style={{ width: "80px" }}/>
                                            <hr/>
                                            <h2 className="">Bienvenido!</h2>
                                            <h5 className="fw-semibold mb-4">Por favor inicie sesión para continuar.</h5>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label>Usuario</label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Ingrese su usuario"
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        value={username}
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Ingrese su password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}
                                                    />
                                                </div>
                                                <button className="btn btn-main-primary btn-block">Login</button>
                                            </form>
                                            {
                                                hasLoginError && <strong>{hasLoginError}</strong>
                                            }
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
