import axios, { AxiosError } from "axios";

export const getUser = async (): Promise<any> => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/auth/user');
        return {
            data: data,
            error: null
        }
    } catch (error) {
        const e = error as AxiosError
        return {
            data: null,
            error: e
        }
    }
}