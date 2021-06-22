import React from 'react'

import './tickets.css'

const Tickets = ({ tickets }) => {
    return (
        <div class="tickets">
            {tickets.map(ticket => <Ticket {...ticket} />)}
        </div>
    )
}

const Ticket = ({ price, carrierLogo, segments }) => {
    return (
        <div class="tickets__ticket">
            <div class="ticket__header">
                <h1 class="ticket__header-price">
                    {price}
                </h1>
                <img src={carrierLogo} alt="" class="tickets__ticket-logo" />
            </div>
            <>
                {segments.map(segment => <Segment {...segment} />)}
            </>
        </div>
    )
}

const Segment = ({ route, time, duration, stopsHeader, stops }) => {
    return (
        <div class="segment">
            <div class="segment-item">
                <div class="segment-header">
                    {route}
                </div>

                <div class="segment-value">
                    {time}
                </div>
            </div>
            <div class="segment-item">
                <div class="segment-header">
                    В пути
                 </div>
                <div class="segment-value">
                    {duration}
                </div>
            </div>
            <div class="segment-item">
                <div class="segment-header">
                    {stopsHeader}
                </div>
                <div class="segment-value">
                    {stops.join(',')}
                </div>
            </div>
        </div>
    )
}

export default Tickets
