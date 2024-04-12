import { cookies } from "next/headers";
import { deleteCookie } from 'cookies-next';
import { USER_COOKIE } from "@/utils/constants";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export async function GET() {
    
    const cookieStore = cookies();

    const token = cookieStore.get(USER_COOKIE);

    if (!token) {
        return NextResponse.json(
            {
                message: 'Unauthorized'
            },
            {
                status: 401
            }
        )
    }

    try {
        const { value } = token;
        verify(value, `${process.env.JWT_SECRET}`)

        const response = {
            user: 'Secret User'
        }
        return new Response(JSON.stringify(response), {
            status: 200
        })
    } catch (error) {
        deleteCookie(USER_COOKIE, { cookies });
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status: 401 }
        );
    }
}