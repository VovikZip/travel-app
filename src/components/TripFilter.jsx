import React from 'react'

const TripFilter = ({filter, setFilter}) => {
  return (
    <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
            <label className="trips-filter__search input">
                <span className="visually-hidden">Search by name</span>
                <input 
                    name="search" 
                    type="search" 
                    placeholder="search by title" 
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
            </label>
            <label className="select">
                <span className="visually-hidden">Search by duration</span>
                <select name="duration" value={filter.duration} onChange={e => setFilter({...filter, duration: e.target.value})} >
                    <option  value="">duration</option>
                    <option value="x_5">&lt; 5 days</option>
                    <option value="x_10">&lt; 10 days</option>
                    <option value="10_x">&ge; 10 days</option>
                </select>
            </label>
            <label className="select">
                <span className="visually-hidden">Search by level</span>
                <select name="level" value={filter.level} onChange={e => setFilter({...filter, level: e.target.value})} >
                    <option  value="">level</option>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="difficult">difficult</option>
                </select>
            </label>
        </form>
    </section>
  )
}

export default TripFilter