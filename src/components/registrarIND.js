import logo from "../assets/EasyIND.png";
import { Link } from 'react-router-dom'
import React from "react";

export function Registrar() {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image" />
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"></div>
                        <form>
                            <imge class="mt-4 mb-6" src={logo} height="72" />
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4">Nombre</label>
                                <input type="name" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Ingrese su nombre" />
                            </div>
                            <div class="form-outline mb-3">
                                <label class="form-label" for="form3Example4">Usuario</label>
                                <input type="user" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Ingrese su usuario" />
                            </div>

                            <div class="form-outline mb-2">
                                <label class="form-label" for="form3Example3">Correo</label>
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Ingrese su correo" />
                            </div>

                            <div class="form-outline mb-1">
                                <label class="form-label" for="form3Example4">Contraseña</label>
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Ingrese su contraseña" />
                            </div>

                            <div class="form-outline mb-0">
                                <label class="form-label" for="form3Example4">Repetir Contraseña</label>
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Repita su contraseña" />
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"></div>
        </section >
    );
}