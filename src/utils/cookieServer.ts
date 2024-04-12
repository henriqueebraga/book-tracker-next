import { cookies } from "next/headers";

const cookieStore = cookies()

export const getUserCookie = cookieStore.get('userJWT');