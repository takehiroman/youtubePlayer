import React, { useState, useCallback, useEffect } from 'react'
import SearchBar from './organisms/SearchBar';
import SearchList from './organisms/SearchList';
import styles from './Root.module.css';
import ApiClient from '../../utils/ApiClient';

const RootTemplate = () => {
    const [query, setQuery] = useState('')
    const [list, setList] = useState<gapi.client.youtube.SearchResult[]>([])
    const handleChange = useCallback((q: string) => {
        setQuery(q);
    }, []);
    useEffect(() => {
        const searchList = async () => {
            const { items } = await ApiClient.search(query);
            setList(items!);
        };
        if(query.trim() !== ''){
            // queryが空文字でなければ検索する
            searchList();
        }
    }, [query])
    return (
        <>
            <SearchBar onChange={handleChange} />
            <div className={styles.content}>
                <SearchList query={query} list={list} />
            </div>
        </>
    );
};

export default RootTemplate;