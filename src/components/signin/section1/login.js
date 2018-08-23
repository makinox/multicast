import React from 'react'
import './index.css'

export default (props) => (
    <section className="bg-light">
        <div className="container">
            <div className="row justify-content-center">

                <div className="col col-12 col-md-9 col-lg-5 section1-signin-form mt-5">
                    <form className="ml-5" onSubmit={props.handleSubmit}>
                        <div className="col col-9 pt-5 pb-5">
                            <h2>Multicast</h2>
                            <h3 className="pt-2 pb-2">Iniciar sesión</h3>
                        </div>
                        <div className="col col-9 pb-5">
                            <label htmlFor="usuario" className="form-group">Ingresa tu usuario</label>
                            <input name="user" onChange={props.handleInput} type="text" className="form-control" id="usuario" placeholder="Ingresa tu usuario"/>
                        </div>
                        <button type="submit" className="btn btn-info mb-5">Enviar</button>
                    </form>
                </div>

            </div>
        </div>
    </section>
)