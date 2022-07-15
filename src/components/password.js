import logo from "../assets/EasyIND.png";
import { Link } from 'react-router-dom'
import React from "react";

export function Password() {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image" />
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"></div>
                        <form>
                            <img class="mt-4 mb-6" src={logo} height="72" />

                            <div class="form-outline mb-4">
                                <h4>Reestablecimiento de contraseña</h4>
                                <input type="username" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Ingrese su usuario" />
                                <label class="form-label" for="form3Example3">Usuario</label>
                            </div>
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"></div>
        </section >

    )
}
