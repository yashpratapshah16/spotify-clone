"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
import { useEffect, useState } from "react";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    const [play, setPlay] = useState(false);
    const { innerWidth } = window;
    const onPlay = useOnPlay(songs);

    useEffect(() => {
        if (innerWidth <= 425) {
            setPlay(true);
        }
    }, [setPlay, innerWidth]);

    if (songs.length === 0) {
        return (<div
            className="
             flex
             flex-col
             gap-y-2
             w-full
             px-6
             text-neutral-400
            "
        >
            No songs found!
        </div>)
    }


    return (
        <div className=" flex flex-col gap-y-2 w-full px-6">
            {songs.map((song) => (
                <div
                    key={song.id}
                    className=" flex items-center gap-x-4 w-full"
                >
                    <div className="flex-1 w-[calc(100%-40px)]">
                        <MediaItem
                            onClick={(id: string) => { onPlay(id) }}
                            data={song}
                            play={play}
                        />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    );
}

export default SearchContent;