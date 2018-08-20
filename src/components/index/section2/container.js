import React from 'react'

export default (props) => (
    <section>
        <section className="bg-light">
            <div className="container">
                <div className="row pt-4 justify-content-center">
                    {props.children}
                </div>
            </div>
        </section>
    </section>
)