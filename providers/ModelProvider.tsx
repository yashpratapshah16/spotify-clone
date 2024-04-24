"use client";

import AuthMOdal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
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
            <UploadModal/>
        </>
    );
}

export default ModelProvider;