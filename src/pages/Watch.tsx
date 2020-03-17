import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import ApiClient from '../utils/ApiClient';
import WatchTemplate from './RootPage/WatchTemplate';

type Props = RouteComponentProps<{ id: string }>

export interface WatchData {
    snippet: gapi.client.youtube.VideoSnippet;
    player: gapi.client.youtube.VideoPlayer;
}

const WatchPage = (props: Props) => {
    const { match } = props;
    console.log(match);
    const [data, setData] = useState<WatchData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const { items } = await ApiClient.videos(match.params.id);
            if(items!.length > 0) {
                const item = items![0]
                setData({
                    snippet: item.snippet!,
                    player: item.player!
                });
            }
        };
        fetchData();
    }, [match.params.id]);
    console.log(data);
    if(data === null) {
        return null;
    }
    return <WatchTemplate snippet={data.snippet} player={data.player} />;
};


export default WatchPage;