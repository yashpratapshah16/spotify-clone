"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAtuhModal";
import { useEffect } from "react";

const AuthMOdal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { isOpen, onClose } = useAuthModal();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose])


    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }


    return (
        <Modal
            title="Welcome Back!"
            description="login to your account!"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                theme="dark"
                providers={["github"]}
                magicLink
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#2cc55e"
                            }
                        }
                    }
                }}
            />
        </Modal>
    );
}

export default AuthMOdal;