import React from 'react'

export default (props) => (
    <section>
        <section className="bg-light">
            <div className="container">
                <div className="row pt-4 justify-content-around">
                    {props.children}
                </div>
            </div>
        </section>
    </section>
)