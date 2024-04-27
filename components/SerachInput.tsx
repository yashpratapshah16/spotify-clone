"use client"

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";
import Input from "./Input";

const SerachInput = () => {

    const rounter = useRouter();
    const [value, setValue] = useState<string>("");
    const debounceValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debounceValue,
        };

        const url = qs.stringifyUrl({
            url: "/search",
            query: query
        });

        rounter.push(url);
    }, [debounceValue, rounter]);

    return (
        <Input
            placeholder=" What do you want to listen to ?"
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
        />
    );
}

export default SerachInput;