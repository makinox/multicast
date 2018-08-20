import React from 'react'

export default (props) => (
    <section className="bg-light">
        <div className="container">
            <div className="row pt-4 justify-content-center">
                <div className="col col-6">
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje</label>
                            <input type="text" className="form-control" id="mensaje" aria-describedby="emailHelp" placeholder="Ingresa tu mensaje" />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
)