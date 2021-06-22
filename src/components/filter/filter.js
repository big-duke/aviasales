import React from 'react'

import './filter.css'


export default function Filter({ filterData, onFilterClick, loading }) {
    const renderFilterItems = () => {

        return filterData.map(({ title, index, checked }) => {
            return (
                <li
                    className={`filter__item ${checked ? "checked" : ""}`}
                    onClick={() => onFilterClick(index)}
                    key={index}
                >
                    {title}
                </li>
            )
        })
    }

    const items = renderFilterItems()
    let classNames = (loading) ? 'filter disable' : 'filter'
    return (

        <aside className={classNames}>
            <h1 className="filter__header">
                Количество пересадок
                </h1>
            <ul className="filter__options">
                {items}
            </ul>
        </aside>
    )
}

// export default Filter