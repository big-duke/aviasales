import React, { Component } from 'react';

import Header from '../header/'
import Filter from '../filter'
import Sort from '../sort'
import Tickets from '../tickets'
import TicketsLoader from '../ticket-loader/tickets-loader'
import AviasalesServices from '../../services/aviasales-services'

import './app.css';

export default class App extends Component {
    aviasalesServices = new AviasalesServices();
    state = {
        filters: [
            { title: 'Все', index: -1, checked: true, stopCount: -1 },
            { title: 'Без пересадок', index: 0, checked: false, stopCount: 0 },
            { title: '1 пересадка', index: 1, checked: false, stopCount: 1 },
            { title: '2 пересадки', index: 2, checked: false, stopCount: 2 },
            { title: '3 пересадки', index: 3, checked: false, stopCount: 3 }

        ],
        sort: [
            {
                title: "самый дешёвый", index: 0, checked: true,
                sortFunction: (a, b) => a.price - b.price
            },
            {
                title: "самый быстрый", index: 1, checked: false,
                sortFunction: (a, b) => a.segments.reduce((prev, cur) => prev + cur.duration, 0) - b.segments.reduce((prev, cur) => prev + cur.duration, 0)
            }
        ],
        loading: true
    }
    componentDidMount() {

        this.getTickets();
    }
    componentDidUpdate(prevProps, prevState) {

        if (JSON.stringify(prevState.filters) !== JSON.stringify(this.state.filters)
            ||
            JSON.stringify(prevState.sort) !== JSON.stringify(this.state.sort)) {
            this.getTickets();

        }
    }

    setFilter = (index) =>
        this.setState(prevState => {
            // обходим массив фильтра и меняем checked у выбранного элемента
            let newFilterData = prevState.filters.map(item => {
                if (item.index === index)
                    return { ...item, checked: !item.checked }
                return item
            })
            // Если выбран первый элемент (Все), то синхронизируем все остальные элементы по нему
            // if (index === -1) {
            //     return (
            //         {
            //             filters: newFilterData.map(item => {
            //                 return { ...item, checked: newFilterData[0].checked }
            //             })
            //         }
            //     )
            // }


            return { filters: newFilterData }
        }
        )

    setSort = (index) => {
        this.setState(prevState => {
            const newSortData = prevState.sort.map(item => {
                if (item.index === index)
                    return { ...item, checked: true }
                else
                    return { ...item, checked: false }
            })
            return { sort: newSortData }
        })

    }

    getTickets() {
        const { filters, sort } = this.state
        this.setState({ loading: true })
        this.aviasalesServices
            .getProcessedTickets(filters, sort)
            .then((res) => {
                this.setState({ tickets: res, loading: false })
            }
            )
    }

    render() {



        return (

            < div className="aviasales-app" >
                <Header />
                <div className="app-container">
                    <Filter filterData={this.state.filters} onFilterClick={this.setFilter} loading={this.state.loading} />
                    <div className="column">
                        <Sort sortData={this.state.sort} onSortClick={this.setSort} loading={this.state.loading} />
                        {this.state.loading ?
                            <TicketsLoader count={5} />
                            :
                            <Tickets tickets={this.state.tickets} />
                        }

                    </div>
                </div>

            </div >
        )
    }
}

