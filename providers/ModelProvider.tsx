"use client";

import AuthMOdal from "@/components/AuthModal";
import { useEffect, useState } from "react";

const ModelProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthMOdal/>
        </>
    );
}

export default ModelProvider;