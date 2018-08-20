import React from 'react'

export default (props) => (
    <section>
            {
                props.stade.map((info, i) => {
                    return (
                    <div className="col col-12" key={i}>
                        <div className="card">
                            <div className="card-header">
                                <h6 className="card-title">{info.author}</h6>
                            </div>
                            <div className="card-body">
                                <p>{info.text}</p>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
    </section>
)