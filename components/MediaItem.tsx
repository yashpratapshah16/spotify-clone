"user client";

import useLoadimage from "@/hooks/useLoadimage";
import { Song } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface MediaItemProps {
    data: Song;
    play?: boolean;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    play = false,
    data,
    onClick
}) => {
    
    const imagePath = useLoadimage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }

        //TODO:default turn on player
    }
    return (
        <div
            onClick={handleClick}
            className="
                flex
                items-center
                gap-x-3
                cursor-pointer
                hover:bg-neutral-800/50
                w-full
                p-2
                rounded-md
            "
        >
            <div
                className="
                 relative
                 rounded-md
                 min-h-[48px]
                 min-w-[48px]
                 overflow-hidden
                 "
            >
                <Image
                    fill
                    src={imagePath || "/Images/default.png"}
                    alt="Media Item"
                    className="objectcover"
                />
            </div>
            <div
                className="
                 flex
                 flex-col
                 gap-y-1
                 overflow-hidden
                "
            >
                <div className={twMerge("", play && "overflow-hidden text-nowrap")}>
                    <p className={twMerge("text-white ", play ? "animate-SlideX" : "truncate")}>
                        <abbr className=" no-underline" title={data.title}>
                            {data.title}
                        </abbr>
                    </p>
                </div>
                <p className=" text-neutral-400 text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    );
}

export default MediaItem;