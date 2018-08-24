import React from 'react'

export default (props) => (
    <div className="col col-md-6 col-12">
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <input type="text" className="form-control" id="mensaje" aria-describedby="emailHelp" placeholder={`Escribe algo ${localStorage.getItem('name')}`} />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
)