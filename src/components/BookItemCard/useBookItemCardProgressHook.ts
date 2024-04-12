import { UseCookieContext } from "@/context-api/Cookie/CookieContext";
import { USER_COOKIE } from "@/utils/constants";
import { getUser } from "@/utils/cookieClient";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCardProgressHook = () => {
    const router = useRouter();
    const userCookie = getCookie(USER_COOKIE)
    const { isCookieUser, updateIsCookieUser } = UseCookieContext();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            if (!isCookieUser) {
                return {
                    isCookieUser: false,
                    isLoading: false
                };
            }
            const { user, error } = await getUser()
            console.log('user', user, 'error', error)
            if (error) {
                updateIsCookieUser(!!userCookie)
                setIsLoading(false)
                return;
            }
            updateIsCookieUser(!!userCookie)
            setIsLoading(false)
        })()
    }, [router])
    useEffect(() => {
        updateIsCookieUser(!!userCookie)
    }, [])
    return {
        isCookieUser,
        isLoading
    }
}