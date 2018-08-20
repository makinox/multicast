import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <section>
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col text-center">
                    <h2>Bienvenido</h2>
                </div>
            </div>
            <div className="row">
                <div className="col mt-5 text-center">
                    <h4>Inicia sesión para disfrutar de la experiencia</h4>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    <Link className="btn btn-warning" to="/signin">Inicia sesión</Link>
                </div>
            </div>
        </div>
    </section>
)