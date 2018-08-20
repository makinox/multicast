import React from 'react'

export default (props) => (
    <div className="col col-3" style={{overflow: 'auto', height: '500px'}}>
        {
            props.stade.map((info, i) => {
                return (
                    <div className="card" key={i}>
                        <div className="card-header">
                            <h6 className="card-title">{info.author}</h6>
                        </div>
                        <div className="card-body">
                            <p>{info.text}</p>
                        </div>
                    </div>
                )
            }).reverse()
        }
    </div>
)