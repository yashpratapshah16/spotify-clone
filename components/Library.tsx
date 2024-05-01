"use client";

import useAuthModal from "@/hooks/useAtuhModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps{
    songs:Song[];
}

const Library:React.FC<LibraryProps> = ({songs}) => {

    const authMOdal=useAuthModal();
    const uploadModal=useUploadModal();
    const {user}=useUser();

    const onClick=()=>{
        if(!user){
            return authMOdal.onOpen();
        }
        
        return uploadModal.onOpen();
    }

    const onPlay=useOnPlay(songs);

    return (
        <div className=" flex flex-col">
            <div 
                className="
                    flex
                    items-center
                    justify-between
                    px-5
                    pt-4
            ">
                <div
                    className="
                        inline-flex
                        items-center
                        gap-x-2
                    "
                >
                    <TbPlaylist className=" text-neutral-400" size={26}/>
                    <p 
                        className="
                            text-neutral-400
                            font-medium
                            text-base  
                        "
                    >
                        Your Library!
                    </p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="
                        text-neutral-400
                        cursor-pointer
                        hover:text-white
                        transition
                    "
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-3
                p-3
            ">
                {songs.map((song)=>(
                    <MediaItem
                        key={song.id}
                        onClick={(id:string)=>{onPlay(id)}}
                        data={song}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;