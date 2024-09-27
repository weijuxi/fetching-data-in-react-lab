import React, { useState } from 'react';

const starshipSearch = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData(searchQuery);
        setSearchQuery('');
    };
  
    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Enter Starship:</label>
                <input
                type="text"
                placeholder="Search starships"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
}

export default starshipSearch;