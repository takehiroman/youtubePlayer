import React, { useState, useCallback } from 'react'
import SearchBar from './organisms/SearchBar';
import SearchList from './organisms/SearchList';
import styles from './Root.module.css';

const RootTemplate = () => {
    const [query, setQuery] = useState('')
    const handleChange = useCallback((q: string) => {
        setQuery(q);
    }, []);
    return (
        <>
            <SearchBar onChange={handleChange} />
            <div className={styles.content}>
                <SearchList query={query} list={[1,2,3,4,5]} />
            </div>
        </>
    );
};

export default RootTemplate;