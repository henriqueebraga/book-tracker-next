import { sign } from 'jsonwebtoken'
import { NextResponse } from "next/server";
import { serialize } from 'cookie';
import { USER_COOKIE } from "@/utils/constants";
import axios from 'axios';

const MAX_AGE = 60 * 60 * 24 *30;

export async function POST(request: Request) {
    const body = await request.json()

    const { username, password} = body;

    const loginResponse = await axios.post('http://localhost:4000/login', {username, password
    });

    // Guard clause for not authorized user
    if (loginResponse.status !== 200) {
        return NextResponse.json(
            { message: 'Unauthorized' },
            { status: 401 }
        );
    }

    const token = sign(
        {
            username
        },
        `${process.env.JWT_SECRET}`,
        {
            expiresIn: MAX_AGE
        }
    )

    const serialized = serialize(USER_COOKIE, token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: MAX_AGE,
        path: '/',
    })

    const response = {
        message: 'Successfully logged in'
    }

    return new Response(JSON.stringify(response), {
        status: 200,
        headers: {'Set-Cookie': serialized}
    })
}
