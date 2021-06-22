import React from 'react';
import Loader from './loader'

import './loader.css'
const TicketsLoader = (props) => {
    const { count } = props
    return (
        <div className="tickets">
            {
                [...Array(count)].map((e, i) => (
                    <div className="tickets__ticket" key={i}>
                        <Loader />
                    </div>
                ))
            }
        </div>
    )


}
export default TicketsLoader
