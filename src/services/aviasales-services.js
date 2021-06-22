export default class AviasalesServices {
    __apiBase = 'https://front-test.beta.aviasales.ru'

    async getResource(url) {

        const res = await fetch(`${this.__apiBase}${url}`);

        if (res.status === 500) {
            return { tickets: [{}], stop: false }
        }

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`)
        }

        return await res.json();
    }


    async getSearchId() {
        const res = await this.getResource(`/search`)

        return res.searchId;
    }

    async getTicketPortion(searchId) {
        const res = await this.getResource(`/tickets?searchId=${searchId}`)
        return res
    }

    async getRawTickets() {
        const searchId = await this.getSearchId();
        let portion = await this.getTicketPortion(searchId);
        let res = [];
        while (!portion.stop) {
            res = [...res, ...portion.tickets]
            portion = await this.getTicketPortion(searchId);
        }
        // remove empty objects before return
        return res.filter(value => Object.keys(value).length !== 0);

    }

    async getProcessedTickets(filters, sort) {
        const tickets = await this.getRawTickets();
        let res = [];

        if (filters[0].checked)
            res = tickets;
        else {
            filters.forEach(filter => {
                if (filter.checked) {
                    let filtered = tickets.filter(ticket => ticket.segments.every(segment => segment.stops.length === filter.stopCount))
                    res = [...res, ...filtered]
                }
            })
        }

        const sortFunction = sort.find(sort => sort.checked).sortFunction
        res = res.sort(sortFunction)


        return res.slice(0, 5).map(this._transformTicket);

    }

    _transformTicket(ticket) {
        const arStopCountHeader = ['без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

        return {
            price: ticket.price.toLocaleString('ru-ru'),
            carrierLogo: `https://pics.avs.io/99/36/${ticket.carrier}.png`,
            segments: ticket.segments.map(segment => {
                const departureTime = new Date(segment.date);
                let arrivalTime = new Date(segment.date)
                arrivalTime.setMinutes(arrivalTime.getMinutes() + segment.duration)

                return (
                    {
                        route: `${segment.origin
                            } \u2013 ${segment.destination} `,
                        time: `${departureTime.toLocaleTimeString('ru-ru', { timeStyle: 'short' })} \u2013 ${arrivalTime.toLocaleTimeString('ru-ru', { timeStyle: 'short' })} `,
                        duration: `${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м`,
                        stops: segment.stops,
                        stopsHeader: arStopCountHeader[segment.stops.length],
                    }
                )
            })

        }
    }
}