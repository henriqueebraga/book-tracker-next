import { sign } from 'jsonwebtoken'
import { NextResponse } from "next/server";
import { serialize } from 'cookie';
import { USER_COOKIE } from "@/utils/constants";

export async function POST(request: Request) {

    const serialized = serialize(USER_COOKIE, '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: -1,
        path: '/',
    })

    const response = {
        message: 'Successfully logged out'
    }

    return new Response(JSON.stringify(response), {
        status: 200,
        headers: {'Set-Cookie': serialized}
    })
}
