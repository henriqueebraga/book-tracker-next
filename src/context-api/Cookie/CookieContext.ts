import { createContext, useContext } from "react"

interface CookieContext {
    cookies: any,
    isCookieUser: boolean;
    updateIsCookieUser: (value:boolean) => void
}

export const CookieContext = createContext<CookieContext>({
    cookies: {},
    isCookieUser: false,
    updateIsCookieUser: (value) => null
})

export const UseCookieContext = () => useContext(CookieContext);