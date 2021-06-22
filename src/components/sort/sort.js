import React from 'react'

import './sort.css'

export default function Sort({ sortData, onSortClick, loading }) {
    const renderSortItems = () => {
        return sortData.map(({ title, index, checked }) => {
            return (
                <div
                    className={`tabs__tab ${checked ? "tabs-selected" : ""}`}
                    onClick={checked ? undefined : () => onSortClick(index)}
                    key={index}>
                    <h1 className="tabs__tab-caption" >
                        {title}
                    </h1>
                </div>
            )
        })
    }
    let classNames = (loading) ? 'tabs disable' : 'tabs'
    return (
        <div className={classNames}>
            {renderSortItems()}
        </div>
    )
}