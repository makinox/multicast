import React from 'react'
import './panel.css'

export default (props) => (
    <div className="col col-3" style={{overflow: 'auto', height: '500px'}}>
        {
            props.stade.map((info, i) => {
                return (
                    <div className="div-card" key={i}>
                        <div className="div-card-header">
                            <h6 className="div-card-title">{info.author}</h6>
                        </div>
                        <div className="div-card-body">
                            <p>{info.text}</p>
                        </div>
                    </div>
                )
            }).reverse()
        }
    </div>
)